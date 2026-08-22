// =============================================================
// app.js — 釜山旅遊特助：應用程式邏輯
// 依賴：data.js 必須在此之前載入
// =============================================================

// Current Selected Day State
let currentDay = 'day3';

// User State (must be declared before DOMContentLoaded runs, so renderItinerary() never gets a ReferenceError)
let userExpenses = {};
let completedSpots = {};
let isSimulation = false;
let simulatedMinutes = 480;
let lastActiveSpotId = null;

let currentRate = 42.50;
const apiURL = 'https://open.er-api.com/v6/latest/TWD';

// DOM Elements
const twdInput = document.getElementById('twd-input');
const krwInput = document.getElementById('krw-input');
const rateInput = document.getElementById('rate-input');

// ------------------ PASSCODE SECURITY & AUTHENTICATION ------------------
// SHA-256 Hash of custom passcode (Never exposed as plaintext in git)
const PASS_HASH = "eb50adaf5fcfbbc31e7ebea06aef56e8fd25335b2f2ba5527cdd3af4c02f781f";

async function sha256(text) {
  const encoder = new TextEncoder();
  const data = encoder.encode(text);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

function checkAuth() {
  const savedToken = localStorage.getItem('busan_auth_token') || sessionStorage.getItem('busan_auth_session');
  const overlay = document.getElementById('auth-overlay');
  if (!overlay) return true;

  if (savedToken === PASS_HASH) {
    overlay.classList.add('hidden');
    return true;
  } else {
    overlay.classList.remove('hidden');
    const passInput = document.getElementById('auth-pass-input');
    if (passInput) {
      passInput.value = '';
      setTimeout(() => passInput.focus(), 300);
    }
    return false;
  }
}

async function handleAuthSubmit(event) {
  if (event) event.preventDefault();
  const input = document.getElementById('auth-pass-input');
  const errorMsg = document.getElementById('auth-error-msg');
  const rememberCheckbox = document.getElementById('auth-remember-checkbox');
  const remember = rememberCheckbox ? rememberCheckbox.checked : true;
  const pass = input ? input.value : '';

  if (!pass) return;

  const hash = await sha256(pass);
  if (hash === PASS_HASH) {
    if (remember) {
      localStorage.setItem('busan_auth_token', PASS_HASH);
    } else {
      sessionStorage.setItem('busan_auth_session', PASS_HASH);
    }
    if (errorMsg) errorMsg.classList.remove('show');
    document.getElementById('auth-overlay').classList.add('hidden');
  } else {
    if (errorMsg) {
      errorMsg.classList.remove('show');
      void errorMsg.offsetWidth; // Trigger reflow for shake animation
      errorMsg.classList.add('show');
    }
    if (input) {
      input.focus();
      input.select();
    }
  }
}

function togglePassVisibility() {
  const input = document.getElementById('auth-pass-input');
  const btn = document.getElementById('toggle-pass-btn');
  if (!input || !btn) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
  } else {
    input.type = 'password';
    btn.innerHTML = '<i class="fa-solid fa-eye"></i>';
  }
}

function lockApp() {
  localStorage.removeItem('busan_auth_token');
  sessionStorage.removeItem('busan_auth_session');
  checkAuth();
}

// ------------------ INITIALIZE APP ------------------
window.addEventListener('DOMContentLoaded', () => {
  // 0. Check Passcode Authentication
  checkAuth();

  // 1. Load data from LocalStorage
  loadSavedState();

  // 2. Fetch Currency Rate
  fetchLatestRate();

  // 3. Render Hotel Card, Schedule & Shopping Guide
  renderHotelCard();
  renderItinerary();
  renderShoppingGuide();

  // 4. Start Time ticking loop
  startClockTicker();
});

// Load Local Storage State
function loadSavedState() {
  try {
    const savedDay = localStorage.getItem('busan_current_day');
    if (savedDay && itineraryData[savedDay]) {
      currentDay = savedDay;
      const selectElem = document.getElementById('day-select-dropdown');
      if (selectElem) selectElem.value = currentDay;
    }

    const expenses = localStorage.getItem('busan_expenses');
    if (expenses) userExpenses = JSON.parse(expenses);

    const completed = localStorage.getItem('busan_completed');
    if (completed) completedSpots = JSON.parse(completed);

    const simSaved = localStorage.getItem('busan_is_sim');
    const simMinSaved = localStorage.getItem('busan_sim_min');
    if (simSaved === 'true') {
      isSimulation = true;
      simulatedMinutes = parseInt(simMinSaved) || 480;
      document.getElementById('sim-slider').disabled = false;
      document.getElementById('sim-slider').value = simulatedMinutes;
      document.getElementById('sim-toggle-btn').classList.add('active');
      document.getElementById('sim-toggle-btn').innerText = '實時時間模式';
    }
  } catch (err) {
    console.warn('LocalStorage error:', err);
  }
}

// Switch Itinerary Day
function switchDay(dayKey) {
  if (!itineraryData[dayKey]) return;
  currentDay = dayKey;
  localStorage.setItem('busan_current_day', dayKey);

  renderHotelCard();
  renderItinerary();
  updateTimelineStates();
  scrollToCurrentActiveEvent();
}

// Render Hotel Accommodation Card
function renderHotelCard() {
  const container = document.getElementById('hotel-card-container');
  const hotel = hotelData[currentDay];
  if (!hotel) {
    container.style.display = 'none';
    return;
  }
  container.style.display = 'block';
  const cleanAddr = hotel.address ? hotel.address.split('(')[0].trim() : '';
  const kakaoUrl = `https://map.kakao.com/link/search/${encodeURIComponent(cleanAddr)}`;
  const naverUrl = `https://map.naver.com/v5/search/${encodeURIComponent(cleanAddr)}`;

  container.innerHTML = `
        <div class="hotel-card-title">
          <span><i class="fa-solid fa-hotel"></i> ${hotel.name}</span>
          <span class="hotel-card-tag">住宿資訊</span>
        </div>
        <div class="hotel-card-body">
          <div class="hotel-card-note">${hotel.note}</div>
          <div class="hotel-addr-box">
            <span class="hotel-addr-text"><i class="fa-solid fa-location-dot"></i> ${hotel.address}</span>
            <div class="hotel-btn-group">
              <button onclick="copyAddressText('${cleanAddr}', this)" class="hotel-copy-pill">
                <i class="fa-solid fa-copy"></i> 複製
              </button>
              <a href="${kakaoUrl}" target="_blank" class="hotel-link-blue">Kakao</a>
              <a href="${naverUrl}" target="_blank" class="hotel-link-blue">Naver</a>
            </div>
          </div>
        </div>
      `;
}

// Render Shopping Guide (Tab 3)
function renderShoppingGuide() {
  const container = document.getElementById('shopping-guide-container');
  if (!container || typeof shoppingGuideData === 'undefined') return;

  let html = '';
  shoppingGuideData.forEach(area => {
    html += `
          <div class="guide-card" style="margin-bottom: 1rem;">
            <div class="guide-card-header">
              <span class="guide-card-title"><i class="fa-solid fa-store"></i> ${area.area}</span>
              <span class="guide-card-badge">${area.badge}</span>
            </div>
            <p class="guide-card-desc">${area.desc}</p>

            <div class="gender-section">
              <div class="gender-title female"><i class="fa-solid fa-person-dress"></i> 👧 女生推薦品牌與店鋪</div>
              <div class="brand-list">
                ${area.female.map(b => `
                  <div class="brand-item">
                    <div class="brand-header">
                      <span class="brand-name">${b.name}</span>
                      <span class="brand-tag">${b.tag}</span>
                    </div>
                    <div class="brand-desc">${b.desc}</div>
                  </div>
                `).join('')}
              </div>
            </div>

            <div class="gender-section">
              <div class="gender-title male"><i class="fa-solid fa-person"></i> 👦 男生推薦品牌與店鋪</div>
              <div class="brand-list">
                ${area.male.map(b => `
                  <div class="brand-item">
                    <div class="brand-header">
                      <span class="brand-name">${b.name}</span>
                      <span class="brand-tag" style="background:#dbeafe; color:#1d4ed8;">${b.tag}</span>
                    </div>
                    <div class="brand-desc">${b.desc}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        `;
  });
  container.innerHTML = html;
}

// Helper for direct address text copying
function copyAddressText(addrText, btn) {
  const showSuccess = () => {
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fa-solid fa-check"></i> 已複製!';
    btn.style.background = '#16a34a';
    btn.style.color = '#ffffff';
    setTimeout(() => {
      btn.innerHTML = originalHTML;
      btn.style.background = '';
      btn.style.color = '';
    }, 1500);
  };
  const fallbackCopy = () => {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = addrText;
      tempInput.style.position = 'fixed';
      tempInput.style.opacity = '0';
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      showSuccess();
    } catch (e) {
      console.error('Copy failed', e);
    }
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(addrText).then(showSuccess).catch(fallbackCopy);
  } else {
    fallbackCopy();
  }
}

// ------------------ CURRENCY LOGIC ------------------
async function fetchLatestRate() {
  const btn = document.getElementById('refresh-rate-btn');
  if (btn) btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> 刷新中...';

  try {
    const response = await fetch(apiURL);
    if (!response.ok) throw new Error('API request failed');
    const data = await response.json();

    if (data && data.rates && data.rates.KRW) {
      currentRate = data.rates.KRW;
      rateInput.value = currentRate.toFixed(2);

      const bannerVal = document.getElementById('banner-rate-display');
      if (bannerVal) bannerVal.innerText = currentRate.toFixed(2);

      updateCalculations('twd');

      if (btn) {
        btn.innerHTML = '<i class="fa-solid fa-check"></i> 已更新!';
        setTimeout(() => {
          btn.innerHTML = '<i class="fa-solid fa-rotate"></i> 刷新匯率';
        }, 1500);
      }
    } else {
      throw new Error('Invalid rate format');
    }
  } catch (error) {
    console.warn('Rate fetch error, using current rate:', error);
    rateInput.value = currentRate.toFixed(2);
    const bannerVal = document.getElementById('banner-rate-display');
    if (bannerVal) bannerVal.innerText = currentRate.toFixed(2);
    updateCalculations('twd');
    if (btn) {
      btn.innerHTML = '<i class="fa-solid fa-rotate"></i> 刷新匯率';
    }
  }
}

// Tab Switcher
function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
  document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));

  if (tabName === 'calc') {
    document.getElementById('tab-calc').classList.add('active');
    document.getElementById('content-calc').classList.add('active');
  } else if (tabName === 'guide') {
    const guideTab = document.getElementById('tab-guide');
    const guideContent = document.getElementById('content-guide');
    if (guideTab) guideTab.classList.add('active');
    if (guideContent) guideContent.classList.add('active');
    renderShoppingGuide();
  } else {
    document.getElementById('tab-itinerary').classList.add('active');
    document.getElementById('content-itinerary').classList.add('active');
    updateAllExpensesUI();
    recalculateTotals();
    scrollToCurrentActiveEvent();
  }
}

// Bidirectional Calculation
function updateCalculations(source) {
  if (source === 'twd') {
    const twdVal = parseFloat(twdInput.value);
    if (!isNaN(twdVal)) {
      krwInput.value = Math.round(twdVal * currentRate);
    } else {
      krwInput.value = '';
    }
  } else if (source === 'krw') {
    const krwVal = parseFloat(krwInput.value);
    if (!isNaN(krwVal)) {
      twdInput.value = Math.round(krwVal / currentRate);
    } else {
      twdInput.value = '';
    }
  }
  updateReferenceTables();
}

// Quick Add TWD/KRW
function addValue(currency, amount) {
  const input = currency === 'twd' ? twdInput : krwInput;
  const currentVal = parseFloat(input.value) || 0;
  input.value = currentVal + amount;
  updateCalculations(currency);
}

// Clear Inputs
function clearValue(currency) {
  const input = currency === 'twd' ? twdInput : krwInput;
  input.value = '';
  updateCalculations(currency);
}

// Manual Rate Edit
function onRateChange() {
  const manualRate = parseFloat(rateInput.value);
  if (!isNaN(manualRate) && manualRate > 0) {
    currentRate = manualRate;
    const rateStatus = document.getElementById('rate-status');
    if (rateStatus) rateStatus.innerHTML = `<i class="fa-solid fa-pen-to-square" style="color: #60a5fa;"></i> 手動設定匯率 (1 TWD = ${currentRate.toFixed(4)} KRW)`;
    updateCalculations('twd');
  }
}

// Render Quick Exchange Reference Tables
function updateReferenceTables() {
  const twdPresets = [100, 500, 1000, 2000, 5000];
  const krwPresets = [1000, 10000, 50000, 100000];

  // TWD to KRW table
  let twdHtml = '';
  twdPresets.forEach(amt => {
    twdHtml += `
          <tr>
            <td class="val-col">NT$ ${amt.toLocaleString()}</td>
            <td class="res-col blue">₩ ${(Math.round(amt * currentRate)).toLocaleString()}</td>
          </tr>
        `;
  });
  document.getElementById('twd-ref-body').innerHTML = twdHtml;

  // KRW to TWD table
  let krwHtml = '';
  krwPresets.forEach(amt => {
    krwHtml += `
          <tr>
            <td class="val-col">₩ ${amt.toLocaleString()}</td>
            <td class="res-col green">NT$ ${(Math.round(amt / currentRate)).toLocaleString()}</td>
          </tr>
        `;
  });
  document.getElementById('krw-ref-body').innerHTML = krwHtml;
}

// ------------------ ITINERARY RENDERING ------------------
function renderItinerary() {
  const container = document.getElementById('timeline-container');
  let html = '';
  const currentList = itineraryData[currentDay] || [];

  currentList.forEach((spot) => {
    const isDone = completedSpots[spot.id] ? 'checked' : '';
    const savedCost = userExpenses[spot.id] !== undefined ? userExpenses[spot.id] : '';
    const cardClass = completedSpots[spot.id] ? 'completed' : '';

    // Generate map actions HTML based on available map links
    let actionsHtml = '';
    if (spot.mapLinkGoogle) {
      actionsHtml = `
            <a href="${spot.mapLinkGoogle}" target="_blank" class="action-link">
              <i class="fa-solid fa-map-location-dot"></i> Google Maps 導航
            </a>
          `;
    } else if (spot.addresses && spot.addresses.length > 0) {
      // Multiple addresses (e.g. "A 或 B") — show first address nav buttons as primary
      // Individual nav buttons are rendered inline within each address block below
      actionsHtml = '';
    } else {
      // Clean Korean address & generate official Mobile Kakao/Naver Map search deep links
      const cleanAddr = spot.address ? spot.address.split('(')[0].trim() : '';
      const kakaoUrl = cleanAddr
        ? `https://map.kakao.com/link/search/${encodeURIComponent(cleanAddr)}`
        : spot.mapLinkKakao;
      const naverUrl = cleanAddr
        ? `https://map.naver.com/v5/search/${encodeURIComponent(cleanAddr)}`
        : spot.mapLinkNaver;

      actionsHtml = `
            <a href="${kakaoUrl}" target="_blank" class="action-link">
              <i class="fa-solid fa-map-pin"></i> Kakao Map
            </a>
            <a href="${naverUrl}" target="_blank" class="action-link">
              <i class="fa-solid fa-compass"></i> Naver Map
            </a>
          `;
    }

    html += `
          <div class="event-card ${cardClass}" id="card-${spot.id}">
            <div class="timeline-dot"></div>
            
            <div class="event-header">
              <span class="event-time">${spot.timeStart} - ${spot.timeEnd}</span>
              <input 
                type="checkbox" 
                class="event-complete-checkbox" 
                ${isDone} 
                onchange="toggleEventCompletion('${spot.id}', this.checked)"
                title="標記完成"
              >
            </div>
            
            <h4 class="event-title">${spot.title}</h4>
            <p class="event-meta">${spot.desc}</p>

            ${spot.addresses && spot.addresses.length > 0 ? spot.addresses.map((loc, idx) => {
      const cleanA = loc.address ? loc.address.split('(')[0].trim() : '';
      const kUrl = cleanA ? `https://map.kakao.com/link/search/${encodeURIComponent(cleanA)}` : '';
      const nUrl = cleanA ? `https://map.naver.com/v5/search/${encodeURIComponent(cleanA)}` : '';
      return `
              <div class="event-address event-address-multi" id="addr-block-${spot.id}-${idx}">
                <div class="event-address-line">
                  <i class="fa-solid fa-location-dot" style="color: #16a34a;"></i> <strong>${loc.label}:</strong> <span class="address-text">${loc.address}</span>
                </div>
                <div class="addr-btn-row">
                  <button onclick="copyAddressText('${cleanA}', this)" class="copy-addr-btn">
                    <i class="fa-solid fa-copy"></i> 複製地址
                  </button>
                  ${kUrl ? `<a href="${kUrl}" target="_blank" class="action-link"><i class="fa-solid fa-map-pin"></i> Kakao</a>` : ''}
                  ${nUrl ? `<a href="${nUrl}" target="_blank" class="action-link"><i class="fa-solid fa-compass"></i> Naver</a>` : ''}
                </div>
              </div>
              ${idx < spot.addresses.length - 1 ? '<div class="addr-or-divider">── 或 ──</div>' : ''}
              `;
    }).join('') : spot.address ? `
            <div class="event-address">
              <div class="event-address-line">
                <i class="fa-solid fa-location-dot" style="color: #16a34a;"></i> <strong>韓文地址:</strong> 
                <span class="address-text">${spot.address}</span>
              </div>
              <button onclick="copyAddress('${spot.id}', this)" class="copy-addr-btn">
                <i class="fa-solid fa-copy"></i> 複製地址
              </button>
            </div>
            ` : ''}
            
            <details class="event-note-details">
              <summary class="event-note-summary">
                <span class="event-note-summary-title">
                  <i class="fa-solid fa-circle-info"></i> 注意事項
                </span>
                <span class="event-note-toggle-tag">
                  展開 <i class="fa-solid fa-chevron-down"></i>
                </span>
              </summary>
              <div class="event-note-content">
                ${spot.note}
              </div>
            </details>
            
            <div class="event-actions">
              ${actionsHtml}
            </div>
            
            <div class="expense-widget">
              <div class="expense-row">
                <span class="expense-label">
                  <i class="fa-solid fa-calculator"></i> 預算估計 (${spot.costLabel}):
                </span>
                <span class="expense-value">₩ ${spot.estimatedCost.toLocaleString()}</span>
              </div>
              <div class="expense-row">
                <span class="expense-label">
                  <i class="fa-solid fa-pen-to-square"></i> 實際花費:
                </span>
                <div class="expense-input-group">
                  <span class="expense-symbol">₩</span>
                  <input 
                    type="number" 
                    placeholder="輸入實際金額" 
                    id="cost-input-${spot.id}"
                    value="${savedCost}" 
                    oninput="logExpense('${spot.id}', this.value)"
                    class="expense-input"
                  >
                </div>
              </div>
              <div class="expense-converted" id="converted-twd-${spot.id}">
                折合新台幣: NT$ 0
              </div>
            </div>
          </div>
        `;
  });

  container.innerHTML = html;
  updateAllExpensesUI();
  recalculateTotals();
}

// Toggle event card completion state
function toggleEventCompletion(id, checked) {
  const card = document.getElementById(`card-${id}`);
  if (checked) {
    card.classList.add('completed');
    completedSpots[id] = true;
  } else {
    card.classList.remove('completed');
    delete completedSpots[id];
  }
  localStorage.setItem('busan_completed', JSON.stringify(completedSpots));
}

// Copy Korean Address to clipboard with iOS Safari Fallback
function copyAddress(id, btn) {
  const currentList = itineraryData[currentDay] || [];
  const spot = currentList.find(s => s.id === id);
  if (spot && spot.address) {
    const cleanAddr = spot.address.split('(')[0].trim();
    copyAddressText(cleanAddr, btn);
  }
}

// Input Actual Spent per spot
function logExpense(id, val) {
  const cost = parseFloat(val);
  if (!isNaN(cost) && cost >= 0) {
    userExpenses[id] = cost;
  } else {
    delete userExpenses[id];
  }

  localStorage.setItem('busan_expenses', JSON.stringify(userExpenses));
  updateSingleExpenseUI(id);
  recalculateTotals();
}

// Update TWD conversion label inside single timeline item
function updateSingleExpenseUI(id) {
  const currentList = itineraryData[currentDay] || [];
  const spot = currentList.find(s => s.id === id);
  if (!spot) return;

  const input = document.getElementById(`cost-input-${id}`);
  const convertedDisplay = document.getElementById(`converted-twd-${id}`);
  if (!input || !convertedDisplay) return;

  const krwVal = parseFloat(input.value);
  if (!isNaN(krwVal)) {
    const twdVal = Math.round(krwVal / currentRate);
    convertedDisplay.innerText = `折合新台幣: NT$ ${twdVal.toLocaleString()}`;
    convertedDisplay.style.visibility = 'visible';
  } else {
    convertedDisplay.innerText = '';
    convertedDisplay.style.visibility = 'hidden';
  }
}

// Update all conversions in timeline list
function updateAllExpensesUI() {
  const currentList = itineraryData[currentDay] || [];
  currentList.forEach(spot => {
    updateSingleExpenseUI(spot.id);
  });
}

// Aggregate budgets vs spent totals (for currentDay AND for entire 6-day trip)
function recalculateTotals() {
  // 1. Current Day Totals
  const currentList = itineraryData[currentDay] || [];
  let dayEstKrw = 0;
  let dayActKrw = 0;

  currentList.forEach(spot => {
    dayEstKrw += spot.estimatedCost;
    if (userExpenses[spot.id] !== undefined) {
      dayActKrw += userExpenses[spot.id];
    }
  });

  const dayEstTwd = Math.round(dayEstKrw / currentRate);
  const dayActTwd = Math.round(dayActKrw / currentRate);

  const budgetEstElem = document.getElementById('budget-estimated');
  const budgetEstTwdElem = document.getElementById('budget-estimated-twd');
  const budgetActElem = document.getElementById('budget-actual');
  const budgetActTwdElem = document.getElementById('budget-actual-twd');

  if (budgetEstElem) budgetEstElem.innerText = `₩ ${dayEstKrw.toLocaleString()}`;
  if (budgetEstTwdElem) budgetEstTwdElem.innerText = `(NT$ ${dayEstTwd.toLocaleString()})`;
  if (budgetActElem) budgetActElem.innerText = `₩ ${dayActKrw.toLocaleString()}`;
  if (budgetActTwdElem) budgetActTwdElem.innerText = `(NT$ ${dayActTwd.toLocaleString()})`;

  const fillBar = document.getElementById('budget-fill');
  if (fillBar) {
    if (dayEstKrw > 0) {
      let percent = (dayActKrw / dayEstKrw) * 100;
      fillBar.style.width = `${Math.min(percent, 100)}%`;
      if (percent > 100) {
        fillBar.style.background = 'var(--accent-gradient)';
      } else if (percent > 85) {
        fillBar.style.background = 'var(--warning-gradient)';
      } else {
        fillBar.style.background = 'var(--success-gradient)';
      }
    } else {
      fillBar.style.width = '0%';
    }
  }

  // 2. 6-Day Entire Trip Totals
  let tripEstKrw = 0;
  let tripActKrw = 0;

  Object.values(itineraryData).forEach(daySpots => {
    daySpots.forEach(spot => {
      tripEstKrw += spot.estimatedCost;
      if (userExpenses[spot.id] !== undefined) {
        tripActKrw += userExpenses[spot.id];
      }
    });
  });

  const tripEstTwd = Math.round(tripEstKrw / currentRate);
  const tripActTwd = Math.round(tripActKrw / currentRate);

  const tripEstElem = document.getElementById('trip-estimated');
  const tripEstTwdElem = document.getElementById('trip-estimated-twd');
  const tripActElem = document.getElementById('trip-actual');
  const tripActTwdElem = document.getElementById('trip-actual-twd');

  if (tripEstElem) tripEstElem.innerText = `₩ ${tripEstKrw.toLocaleString()}`;
  if (tripEstTwdElem) tripEstTwdElem.innerText = `(NT$ ${tripEstTwd.toLocaleString()})`;
  if (tripActElem) tripActElem.innerText = `₩ ${tripActKrw.toLocaleString()}`;
  if (tripActTwdElem) tripActTwdElem.innerText = `(NT$ ${tripActTwd.toLocaleString()})`;
}

// ------------------ TIME SCHEDULER & TICKER ------------------
function startClockTicker() {
  // Refresh time checker loop
  setInterval(updateTimelineStates, 10000);
  updateTimelineStates();
}

// Get current minutes of day (e.g. 08:30 -> 8 * 60 + 30 = 510)
function getMinutesOfDay(timeStr) {
  const parts = timeStr.split(':');
  return parseInt(parts[0]) * 60 + parseInt(parts[1]);
}

// Render active/completed highlights on timeline cards based on current time
function updateTimelineStates() {
  let currentMin = 0;

  if (isSimulation) {
    currentMin = simulatedMinutes;
  } else {
    const now = new Date();
    currentMin = now.getHours() * 60 + now.getMinutes();
  }

  const currentList = itineraryData[currentDay] || [];
  if (currentList.length === 0) return;

  // Track active spot
  let activeSpot = null;
  let nextSpot = null;
  let activeCardElement = null;

  // Loop current day itinerary to classify spot states
  currentList.forEach((spot, index) => {
    const startMin = getMinutesOfDay(spot.timeStart);
    const endMin = getMinutesOfDay(spot.timeEnd);
    const card = document.getElementById(`card-${spot.id}`);

    if (!card) return;

    card.classList.remove('active');

    if (currentMin >= startMin && currentMin < endMin) {
      // Inside this event
      card.classList.add('active');
      activeSpot = spot;
      activeCardElement = card;
      if (index < currentList.length - 1) {
        nextSpot = currentList[index + 1];
      }
    }
  });

  // Update Current Progress Dashboard Header
  const headerTitle = document.getElementById('current-title');
  const headerNext = document.getElementById('current-next');
  const headerProgressFill = document.getElementById('current-progress');
  if (!headerTitle || !headerNext || !headerProgressFill) return;

  if (activeSpot) {
    const startMin = getMinutesOfDay(activeSpot.timeStart);
    const endMin = getMinutesOfDay(activeSpot.timeEnd);
    const totalDuration = endMin - startMin;
    const progressMin = currentMin - startMin;
    const progressPercentage = (progressMin / totalDuration) * 100;

    const minsLeft = endMin - currentMin;
    headerTitle.innerHTML = `進行中: ${activeSpot.title.split('：')[1] || activeSpot.title} <span class="current-remaining-badge">剩餘 ${minsLeft} 分鐘</span>`;

    if (nextSpot) {
      headerNext.innerText = `下一站 (${nextSpot.timeStart}): ${nextSpot.title.split('：')[1] || nextSpot.title}`;
    } else {
      headerNext.innerText = `這是今日最後一個行程囉！`;
    }

    headerProgressFill.style.width = `${progressPercentage}%`;

    if (activeSpot.id !== lastActiveSpotId) {
      lastActiveSpotId = activeSpot.id;
      scrollToCurrentActiveEvent();
    }
  } else {
    const firstStart = getMinutesOfDay(currentList[0].timeStart);
    const lastEnd = getMinutesOfDay(currentList[currentList.length - 1].timeEnd);

    if (currentMin < firstStart) {
      const minsToStart = firstStart - currentMin;
      const hoursToStart = Math.floor(minsToStart / 60);
      const remMins = minsToStart % 60;
      const waitStr = hoursToStart > 0 ? `${hoursToStart} 小時 ${remMins} 分鐘` : `${remMins} 分鐘`;

      headerTitle.innerText = `☀️ 當日行程尚未開始！`;
      headerNext.innerText = `首站將在 ${currentList[0].timeStart} 開始 (距離還有 ${waitStr})`;
    } else {
      headerTitle.innerText = `🌙 當日行程已圓滿結束！`;
      headerNext.innerText = `願您在釜山玩得愉快，今晚做個好夢～`;
    }
    headerProgressFill.style.width = '0%';
    lastActiveSpotId = null;
  }
}

// Scroll to the active timeline item
function scrollToCurrentActiveEvent() {
  if (lastActiveSpotId) {
    const activeCard = document.getElementById(`card-${lastActiveSpotId}`);
    if (activeCard) {
      // Add micro-delay for DOM tab switches to settle
      setTimeout(() => {
        activeCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 150);
    }
  }
}

// ------------------ TIME SIMULATION ------------------
function toggleSimulation() {
  isSimulation = !isSimulation;
  const slider = document.getElementById('sim-slider');
  const toggleBtn = document.getElementById('sim-toggle-btn');

  slider.disabled = !isSimulation;
  localStorage.setItem('busan_is_sim', isSimulation);

  if (isSimulation) {
    toggleBtn.classList.add('active');
    toggleBtn.innerText = '實時時間模式';
    // Read current slider val
    onSimulationSliderChange(slider.value);
  } else {
    toggleBtn.classList.remove('active');
    toggleBtn.innerText = '切換模擬時間';
    // Get actual system time
    const now = new Date();
    const curMin = now.getHours() * 60 + now.getMinutes();
    document.getElementById('sim-time-display').innerText = formatMinutesToTimeString(curMin);
    updateTimelineStates();
  }
}

// Triggered when slider moves
function onSimulationSliderChange(val) {
  simulatedMinutes = parseInt(val);
  localStorage.setItem('busan_sim_min', simulatedMinutes);
  document.getElementById('sim-time-display').innerText = formatMinutesToTimeString(simulatedMinutes);
  updateTimelineStates();
}

// Helper format minutes to HH:MM
function formatMinutesToTimeString(min) {
  const hh = Math.floor(min / 60).toString().padStart(2, '0');
  const mm = (min % 60).toString().padStart(2, '0');
  return `${hh}:${mm}`;
}

// Register Service Worker for Offline PWA Support
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(reg => console.log('Service Worker registered successfully:', reg.scope))
      .catch(err => console.log('Service Worker registration failed:', err));
  });
}