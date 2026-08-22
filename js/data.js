// =============================================================
// data.js — 釜山旅遊特助：靜態資料 (2026/09/11 ~ 09/16 修改版0822)
// 包含：hotelData（飯店）、itineraryData（6 天行程）、shoppingGuideData（買衣服指南）、travelPrepData（行前筆記）
// =============================================================

// Hotel Accommodation Data per day
const hotelData = {
  day1: {
    name: "西面：Arban Hotel 阿班飯店 🏨",
    address: "부산광역시 부산진구 중앙대로691번길 32",
    note: "【住宿提醒】9/11 入住 1 晚。位於西面站 6/7 號出口步行 3-5 分鐘，生活機能極佳！"
  },
  day2: {
    name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
    address: "부산 수영구 광안해변로278번길 42 B동 9층",
    note: "【換飯店提醒】今日從西面 Arban 退房，行李使用 Zimcarry 寄送，移防至廣安里海灘飯店（連住 4 晚至 9/16）！"
  },
  day3: {
    name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
    address: "부산 수영구 광안해변로278번길 42 B동 9층",
    note: "【住宿】連住第 2 晚。今日遊覽甘川洞、松島與南浦洞光復路商圈，晚間返回廣安里。"
  },
  day4: {
    name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
    address: "부산 수영구 광안해변로278번길 42 B동 9층",
    note: "【住宿】連住第 3 晚。今日暢玩 Skyline Luge、機張市場松葉蟹、Peak Square 咖啡廳與海雲台沙灘。"
  },
  day5: {
    name: "廣安里：H Avenue Gwangalli Beach 廣安里海灘飯店 🏨",
    address: "부산 수영구 광安해변로278번길 42 B동 9층",
    note: "【住宿】連住第 4 晚（最後一晚）。今日體驗天空膠囊列車、青沙浦、Club D Oasis 五星汗蒸幕與釜山宅烤肉。"
  },
  day6: {
    name: "廣安里 ➔ 韓國金海國際機場 ✈️",
    address: "부산광역시 강서구 공항진입로 108",
    note: "【歸賦】12:15 搭計程車直達金海機場 (13:00 前抵達)，搭乘 15:00 德威航空返台！"
  }
};

// Full 6-Day Itinerary Data Object (9/11 ~ 9/16 修改版0822)
const itineraryData = {
  "day1": [
    {
      "id": "d1-spot-0",
      "timeStart": "08:30",
      "timeEnd": "14:15",
      "title": "啟程：台南出發 ➔ 高雄午餐 ➔ 小港機場 🛫",
      "desc": "預計早上 08:30 從台南出發，至高雄享用午餐後前往小港機場 (11:15 前抵達)，14:15 班機起飛。",
      "address": "高雄國際機場 (小港機場)",
      "note": "【備忘】出發前確定 E-sim 安裝、Visit Busan Pass App 綁定、富邦海外旅遊險已備、可預先上網填寫電子入境卡 (e-Arrival Card)。",
      "mapLinkGoogle": "https://www.google.com/maps/dir/?api=1&destination=高雄國際機場",
      "estimatedCost": 0,
      "costLabel": "啟程出發"
    },
    {
      "id": "d1-spot-1",
      "timeStart": "14:15",
      "timeEnd": "17:55",
      "title": "飛行與入境：高雄小港 ➔ 釜山金海國際機場 ✈️",
      "desc": "17:55 抵達金海機場。辦理入境手續後搭輕軌至沙上站轉地鐵至西面。",
      "address": "부산광역시 강서구 공항진입로 108 (김해국제공항)",
      "note": "【交通與換匯】搭輕軌至沙上站(30分鐘) ➔ 轉地鐵 2 號線至【西面站】(約45分鐘)。國際航廈 3 號出口對面「金海輕軌・機場站」1 樓驗票口前 MONEY BOX 金海機場店匯率讚！",
      "mapLinkKakao": "https://map.kakao.com/link/search/김해국제공항",
      "mapLinkNaver": "https://map.naver.com/v5/search/김해국제공항",
      "estimatedCost": 2500,
      "costLabel": "輕軌地鐵交通費"
    },
    {
      "id": "d1-spot-2-1",
      "timeStart": "19:30",
      "timeEnd": "19:50",
      "title": "換錢：西面「那英換錢所」換韓元 💵",
      "desc": "前往西面站 7 號出口旁老奶奶那英換錢所換足韓元現金。",
      "address": "부산광역시 부산진구 서面로 56",
      "note": "【換錢】西面站 7 號出口步行 2-3 分鐘，位於服飾/雜貨店內，匯率極佳！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 부산진구 서면로 56",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 부산진구 서면로 56",
      "estimatedCost": 0,
      "costLabel": "換匯現鈔"
    },
    {
      "id": "d1-spot-2-2",
      "timeStart": "19:50",
      "timeEnd": "20:10",
      "title": "入住：Arban Hotel Check-in 🏨",
      "desc": "抵達西面熱鬧商圈中心的 Arban Hotel 辦理入住放行李。",
      "address": "부산광역시 부산진구 중앙대로691번길 32 (아르반호텔)",
      "note": "【飯店】西面站步行約 5 分鐘，生活機能極佳，周邊餐廳藥妝林立。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 부산진구 중앙대로691번길 32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 부산진구 중앙대로691번길 32",
      "estimatedCost": 0,
      "costLabel": "辦理入住"
    },
    {
      "id": "d1-spot-3",
      "timeStart": "20:10",
      "timeEnd": "21:30",
      "title": "晚餐：山莊 1988 (Sanjang 1988 馬鈴薯排骨湯) 🍲",
      "desc": "西面復古熱點！享用香辣濃郁、肉質軟嫩離骨的馬鈴薯排骨湯。",
      "address": "부산 부산진구 동천로 97-6",
      "note": "【美食】西面年輕人熱門名店，復古氛圍滿分，吸飽湯汁的大骨與馬鈴薯極度美味！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 부산진구 동천로 97-6",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 부산진구 동천로 97-6",
      "estimatedCost": 35000,
      "costLabel": "馬鈴薯排骨湯晚餐費"
    },
    {
      "id": "d1-spot-4",
      "timeStart": "21:30",
      "timeEnd": "23:00",
      "title": "購物：Olive Young 西面總店 ＆ 짱藥局 ＆ SPAO 🛍️",
      "desc": "採買護膚保養品、藥品與 SPAO 平價日常服飾/聯名睡衣。",
      "addresses": [
        {
          "label": "Olive Young 西面總店 / 서면짱약국 (中央路704-1)",
          "address": "부산광역시 부산진구 중앙대로 704-1"
        },
        {
          "label": "SPAO 西面店 (營業至 22:00 / 西面站 2 號出口)",
          "address": "부산 부산진구 중앙대로 692"
        }
      ],
      "note": "【購物退稅】1) Olive Young 滿 3 萬韓元現場持護照退稅；2) 짱藥局很新很大退稅齊全，有繁中說明；3) SPAO 平價男女裝、寬鬆大學 T、睡衣現場退稅。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 부산진구 중앙대로 704-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 부산진구 중앙대로 704-1",
      "estimatedCost": 50000,
      "costLabel": "首晚藥妝服飾採買"
    }
  ],
  "day2": [
    {
      "id": "d2-spot-1",
      "timeStart": "09:20",
      "timeEnd": "10:20",
      "title": "早餐：Egg Drop 西面樂天後門店 🥪",
      "desc": "從 Arban Hotel 走過去 2-3 分鐘，在樂天百貨後門巷子享用現烤蒜香歐姆蛋吐司（可內用或外帶回飯店）。",
      "address": "부산 부산진구 부전로66번길 12",
      "note": "【美食】爆漿滑嫩歐姆蛋搭配奶油吐司。退房時間為 11:00 前。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 부산진구 부전로66번길 12",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 부산진구 부전로66번길 12",
      "estimatedCost": 12000,
      "costLabel": "Egg Drop 早餐費"
    },
    {
      "id": "d2-spot-2-1",
      "timeStart": "10:20",
      "timeEnd": "10:30",
      "title": "Zimcarry 行李寄送 🧳",
      "desc": "退房時將行李交給西面 Arban 飯店櫃檯（需預約 Zimcarry），當日直達廣安里飯店！",
      "address": "부산 부산진구 중앙대로691번길 32 (Arban Hotel)",
      "note": "【Zimcarry】行李直達廣安里飯店。使用前一天務必點擊 Email 確認信上傳行李外觀照片供司機核對認領。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 부산진구 중앙대로691번길 32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 부산진구 중앙대로691번길 32",
      "estimatedCost": 10000,
      "costLabel": "Zimcarry 行李寄送費"
    },
    {
      "id": "d2-spot-2-2",
      "timeStart": "10:30",
      "timeEnd": "11:00",
      "title": "出發前往影島海女村 🚕",
      "desc": "雙手空空，直接叫計程車輕裝前往影島海女村 (約 25 分鐘)。",
      "address": "부산광역시 영도구 중리남로 2-36 (영도해녀촌)",
      "note": "【交通】計程車車程約 25 分鐘，直達海女村。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 중리남로 2-36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 중리남로 2-36",
      "estimatedCost": 12000,
      "costLabel": "前往影島計程車資"
    },
    {
      "id": "d2-spot-3",
      "timeStart": "11:00",
      "timeEnd": "12:30",
      "title": "午餐：影島海女村 (영도해녀촌) 🌊",
      "desc": "坐在海邊岩石草蓆上，享用海女現撈新鮮海膽 + 紫菜飯捲 + 海膽拉麵。",
      "address": "부산광역시 영도구 중리남로 2-36",
      "note": "【美食】將新鮮海膽放在紫菜飯捲上一口吃下，絕美海景與極致美味！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 중리남로 2-36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 중리남로 2-36",
      "estimatedCost": 35000,
      "costLabel": "海鮮海膽拉麵餐費"
    },
    {
      "id": "d2-spot-4",
      "timeStart": "12:40",
      "timeEnd": "14:40",
      "title": "景點：太宗台 ＋ Danubi 列車 🌲",
      "desc": "搭計程車 (8-10 分鐘，₩5,000-6,000) 前往太宗台，遊覽展望台、影島燈塔、太宗寺。",
      "address": "부산 영도구 전망로 24 (태종대)",
      "note": "【體驗】Danubi 小火車成人來回 ₩4,000。若遇安全檢查暫停營運，改搭免費接駁巴士或健行（入口➔展望台➔燈塔）。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 영도구 전망로 24",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 영도구 전망로 24",
      "estimatedCost": 14000,
      "costLabel": "計程車與太宗台門票"
    },
    {
      "id": "d2-spot-5",
      "timeStart": "15:00",
      "timeEnd": "16:30",
      "title": "景點：白淺灘文化村 (絕美海景步道) 🎨",
      "desc": "搭計程車 (15-20 分鐘，₩9,000-11,000) 至白淺灘，沿著崖壁上的彩繪小巷散步，拍白牆藍海、絕美海景隧道與幾何階梯。",
      "address": "부산광역시 영도구 절영로 194 (흰여울문화마을)",
      "note": "【拍照】極像希臘聖托里尼的藍白彩繪村落，海岸隧道與幾何階梯是絕佳合照點！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 영도구 절영로 194",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 영도구 절영로 194",
      "estimatedCost": 10000,
      "costLabel": "太宗台至白淺灘計程車"
    },
    {
      "id": "d2-spot-6",
      "timeStart": "16:30",
      "timeEnd": "17:00",
      "title": "體驗：白淺灘 Footbath Cafe View 1號店 (海景足浴) ♨️",
      "desc": "享受 30 分鐘無敵海景自動氣泡足浴＋電動肩頸腰按摩器＋任選飲品一杯！",
      "address": "부산 영도구 흰여울길 152 2층 (족욕카페뷰 1호점)",
      "note": "【足浴放鬆】採人頭均一價：現金付款 ₩15,000 / 刷卡 ₩16,000。可先走去預約，邊泡腳邊看無敵海景徹底舒緩雙腿。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 영도구 흰여울길 152",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 영도구 흰여울길 152 2층",
      "estimatedCost": 30000,
      "costLabel": "雙人海景足浴咖啡費"
    },
    {
      "id": "d2-spot-7",
      "timeStart": "17:00",
      "timeEnd": "17:35",
      "title": "廣安里 Check-in：H Avenue Gwangalli Beach 🏨",
      "desc": "白淺灘叫計程車直達廣安里 H 大道飯店 (約 30-35 分鐘，連住 4 晚至 9/16)。",
      "address": "부산 수영구 광안해변로278번길 42 B동 9층",
      "note": "【住宿】房間面海第一排！放好行李休整漫步廣安里沙灘。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로278번길 42",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로278번길 42",
      "estimatedCost": 18000,
      "costLabel": "回廣安里計程車資"
    },
    {
      "id": "d2-spot-8",
      "timeStart": "18:00",
      "timeEnd": "20:00",
      "title": "廣安里愜意時光 ＆ Millac the Market 複合商場 🛍️",
      "desc": "去「水邊最高豬肉湯飯」抽號碼牌 (也可不抽) ➔ 步行至 Millac the Market 買小食逛街。",
      "address": "부산 수영구 민락수변로 17번길 56 (밀락더마켓)",
      "note": "【逛街與美食】大階梯面海設計極具現代感，裡面有文青設計店鋪及美味點心。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 민락수변로 17번길 56",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 민락수변로 17번길 56",
      "estimatedCost": 10000,
      "costLabel": "Millac Market 點心小食"
    },
    {
      "id": "d2-spot-9",
      "timeStart": "20:00",
      "timeEnd": "20:15",
      "title": "廣安里 M 無人機燈光秀 (Gwangalli Drone Show) 🎆",
      "desc": "在廣安里房間或沙灘觀賞週六夜間無人機燈光秀！",
      "address": "부산 수영구 광안해변로 219",
      "note": "【燈光秀】夏季（3-9月）每週六 20:00 及 22:00（每場約 10-12 分鐘）。廣安大橋夜景美不勝收！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로 219",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로 219",
      "estimatedCost": 0,
      "costLabel": "免費觀賞"
    },
    {
      "id": "d2-spot-10",
      "timeStart": "20:30",
      "timeEnd": "22:00",
      "title": "晚餐：水邊最高豬肉湯飯 (수변최고돼지국밥) 🍲",
      "desc": "享用釜山豬肉湯飯排名第一名名店！鮮美濃郁無腥味。",
      "address": "부산 수영구 광안해변로370번길 9-32",
      "note": "【美食】加入韭菜、蝦醬調味，搭配金黃酥脆的抗生素豬五花，湯頭濃郁令人回味無窮。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로370번길 9-32",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로370번길 9-32",
      "estimatedCost": 24000,
      "costLabel": "豬肉湯飯晚餐費"
    }
  ],
  "day3": [
    {
      "id": "spot-1",
      "timeStart": "08:00",
      "timeEnd": "09:00",
      "title": "早餐：ALL SUNDAY 貝果 廣安店 🥯",
      "desc": "廣安里必吃超人氣貝果，口感扎實Q彈，起司抹醬大推！",
      "address": "부산 수영구 광안로61번길 28 1층",
      "note": "【推薦】熱門口味容易完售，建議踩點或提早抵達挑選好口味。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안로61번길 28",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안로61번길 28 1층",
      "estimatedCost": 10000,
      "costLabel": "貝果早餐費"
    },
    {
      "id": "spot-2",
      "timeStart": "09:00",
      "timeEnd": "09:35",
      "title": "轉場：廣安里 ➔ 甘川洞 🚕",
      "desc": "搭乘計程車，從廣安里直奔甘川洞文化村。",
      "address": "부산광역시 사하구 감내2로 203 (감천문화마을)",
      "note": "【交通】建議直達計程車以節省體力 (車程約 35 分鐘，預估車資 ₩18,000)。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 사하구 감내2로 203",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 사하구 감내2로 203",
      "estimatedCost": 18000,
      "costLabel": "預估計程車資"
    },
    {
      "id": "spot-3",
      "timeStart": "09:35",
      "timeEnd": "11:30",
      "title": "景點：甘川洞文化村 🎨 ＋ 手翻書 Flipbook Studio 📖",
      "desc": "探索彩色壁畫村，尋找小王子與狐狸合照，到景觀咖啡廳俯瞰村落。",
      "address": "부산광역시 사하구 감내2로 203",
      "note": "【VBP 藍色景點】甘川洞手翻書 Flipbook Studio 免費！8秒鐘連貫動態錄影 (建議揮手 ➔ 比愛心 ➔ 親一下效果最好)！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 사하구 감내2로 203",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 사하구 감내2로 203",
      "estimatedCost": 0,
      "costLabel": "手翻書 (Busan Pass 免費)"
    },
    {
      "id": "spot-4",
      "timeStart": "11:30",
      "timeEnd": "11:45",
      "title": "轉場：甘川洞 ➔ 松島午餐 🚕",
      "desc": "叫計程車前往松島午餐餐廳「海底貝殼王國」 (約 12-15 分鐘)。",
      "address": "부산 서구 송도해변로 147-1 (바닷속조개왕국)",
      "note": "【交通】計程車車程極短，約 12-15 分鐘。預估車資約 ₩6,000。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 147-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 147-1",
      "estimatedCost": 6000,
      "costLabel": "預估計程車資"
    },
    {
      "id": "spot-5",
      "timeStart": "11:45",
      "timeEnd": "13:30",
      "title": "午餐：海底貝殼王國（烤扇貝） 🦪",
      "desc": "松島經典海邊美味！享用炭火現烤、放滿起司的新鮮扇貝。",
      "address": "부산 서구 송도해변로 147-1",
      "note": "【推薦】烤扇貝加上起司與洋蔥調味，最後配上海苔炒飯堪稱一絕！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 147-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 147-1",
      "estimatedCost": 60000,
      "costLabel": "雙人烤扇貝餐費"
    },
    {
      "id": "spot-6",
      "timeStart": "13:30",
      "timeEnd": "13:40",
      "title": "轉場：步行前往纜車站 🚶",
      "desc": "散步或搭計程車（3分鐘）前往「松島灣纜車站」。",
      "address": "부산 서구 송도해변로 171",
      "note": "【交通】可散步慢慢沿海岸走（約 10 分鐘）或搭計程車（3分鐘，基本車資）。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "步行前往"
    },
    {
      "id": "spot-7",
      "timeStart": "13:40",
      "timeEnd": "14:20",
      "title": "景點：松島海上纜車 (水晶車廂) 纜車跨海 🚠",
      "desc": "使用 Busan Pass 兌換松島海上纜車門票，排隊搭乘水晶車廂跨海。",
      "address": "부산 서구 송도해변로 171 (송도해상케이블카)",
      "note": "【VBP 藍色景點】免費兌換來回票。預留週日下午排隊搭乘水晶車廂（透明地板）的時間。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "海上纜車 (Busan Pass 免費)"
    },
    {
      "id": "spot-8",
      "timeStart": "14:20",
      "timeEnd": "14:50",
      "title": "景點：朝聖松島龍宮雲橋 🌉",
      "desc": "行走在網狀鏤空的雲橋上，感受海浪在腳下奔騰的震撼，眺望陡峭懸崖。",
      "address": "부산광역시 서구 암남동 620-53",
      "note": "【注意】需現場自費 ₩1,000 (不含在Pass)。纜車 SkyPark 站出口順右側下坡走 5 分鐘即達售票處。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 서구 암남동 620-53",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 서구 암남동 620-53",
      "estimatedCost": 2000,
      "costLabel": "雲橋門票 (需自費)"
    },
    {
      "id": "spot-9",
      "timeStart": "14:50",
      "timeEnd": "15:10",
      "title": "拍照：岩南公園海岸木棧道 📸",
      "desc": "沿著雲橋旁的海岸懸崖木棧道漫步，拍攝極具張力的絕美海景合影。",
      "address": "부산광역시 서구 암남동 620-53",
      "note": "【推薦】走大約 10 分鐘拍完精華照片後原路折返回到纜車站。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 서구 암남동 620-53",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 서구 암남동 620-53",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "spot-10",
      "timeStart": "15:10",
      "timeEnd": "15:40",
      "title": "景點：纜車站 3 樓頂樓與恐龍廣場 🦖",
      "desc": "回到纜車 SkyPark 站 3 樓觀景台拍小王子，1 樓廣場看發聲動態恐龍。",
      "address": "부산 서구 송도해변로 171",
      "note": "【指南】頂樓觀景台與小王子合照、到 1 樓看動態恐龍與時空膠囊牆。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "spot-11",
      "timeStart": "15:40",
      "timeEnd": "16:00",
      "title": "回程：搭乘回程纜車 (夕陽海景) 🚠",
      "desc": "搭回程纜車返回松島灣站。在海中央迎接斜陽，欣賞波光粼粼的夕陽海景。",
      "address": "부산 서구 송도해변로 171",
      "note": "【提醒】從高空俯瞰夕陽海景非常美麗，相機不要收！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 서구 송도해변로 171",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 서구 송도해변로 171",
      "estimatedCost": 0,
      "costLabel": "回程纜車"
    },
    {
      "id": "spot-12",
      "timeStart": "16:00",
      "timeEnd": "16:15",
      "title": "轉場：松島 ➔ 南浦洞光復路商圈 🚕",
      "desc": "從松島搭計程車移防南浦洞繁華商圈 (約 10-15 分鐘)。",
      "address": "부산광역시 중구 비프광장로 36",
      "note": "【交通】計程車車程約 10-15 分鐘，預估車資 ₩7,000。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 비프광장로 36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 비프광장로 36",
      "estimatedCost": 7000,
      "costLabel": "預估計程車資"
    },
    {
      "id": "spot-13",
      "timeStart": "16:20",
      "timeEnd": "16:50",
      "title": "點心：BIFF 廣場吃黑糖餅 🥞",
      "desc": "排隊朝聖剛出爐熱騰騰酥脆的「元祖黑糖餅」。",
      "address": "부산광역시 중구 비프광장로 36",
      "note": "【美食】金黃酥脆黑糖餅塞滿堅果，建議一拿到熱熱吃，極度美味！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 비프광장로 36",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 비프광장로 36",
      "estimatedCost": 4000,
      "costLabel": "黑糖餅點心費 (2人份)"
    },
    {
      "id": "spot-14-1",
      "timeStart": "16:50",
      "timeEnd": "18:15",
      "title": "購物：南浦洞光復路 ＆ 國際市場 (買衣服首選) 🛍️",
      "desc": "大逛光復路流行服飾街、國際市場與樂天百貨大創，是全釜山買衣服店家最齊全的商圈！",
      "address": "부산광역시 중구 광복로 72-1 (광복로 패션거리)",
      "note": "【買衣服推薦】👧 女生：Mardi Mercredi（小雛菊）、ÅLAND（新銳選品）；👦 男生：MUSINSA Standard（國民極簡高質感）、Wonderplace（潮流工裝）、Covernat/Lee。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 광복로 72-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 광복로 72-1",
      "estimatedCost": 0,
      "costLabel": "商圈購物採買"
    },
    {
      "id": "spot-14-2",
      "timeStart": "18:15",
      "timeEnd": "19:00",
      "title": "景點：樂天百貨光復店 11F 頂樓花園 🌉",
      "desc": "登上樂天百貨頂樓觀景花園，遠眺影島大橋與釜山港的開闊夜景，順逛大創 (Daiso)。",
      "address": "부산광역시 중구 중앙대로 2 (롯데백화점 광복점)",
      "note": "【夜景】11 樓的空中花園是釜山最知名的免費夜景點之一，可以 360 度俯瞰影島大橋與港區風光！旁邊還有大創可逛。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 중앙대로 2",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 중앙대로 2",
      "estimatedCost": 0,
      "costLabel": "免費夜景"
    },
    {
      "id": "spot-14-3",
      "timeStart": "19:00",
      "timeEnd": "20:00",
      "title": "晚餐：南浦蔘雞湯 (남포삼계탕) 🍲",
      "desc": "享用數十年歷史傳統老店蔘雞湯，滋補養身、香氣濃郁。",
      "address": "부산광역시 중구 남포길 16-1 (남포삼계탕)",
      "note": "【美食】經典滋補蔘雞湯，雞肉燉得極為軟嫩易離骨，湯頭鮮美回甘，用餐附贈人蔘酒小瓶（可直接喝或加進湯裡）。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 중구 남포길 16-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 중구 남포길 16-1",
      "estimatedCost": 45000,
      "costLabel": "人蔘雞晚餐"
    },
    {
      "id": "spot-15",
      "timeStart": "20:00",
      "timeEnd": "20:30",
      "title": "回程：南浦洞 ➔ 廣安里 🚕",
      "desc": "搭乘計程車直達廣安里 (約 25 分鐘，行經廣安大橋欣賞夜景)。",
      "address": "부산 수영구 광안해변로278번길 42 (H Avenue Hotel)",
      "note": "【交通】計程車直達廣安里 (預估車資 ₩15,000)。逛到想回去隨時可回飯店！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로278번길 42",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로278번길 42",
      "estimatedCost": 15000,
      "costLabel": "回程計程車資"
    }
  ],
  "day4": [
    {
      "id": "d4-spot-1",
      "timeStart": "08:40",
      "timeEnd": "09:50",
      "title": "早餐：大海鮑魚粥 (바다마루전복죽) 🥣",
      "desc": "08:40 計程車出發 (15-20 分鐘)，享用整顆鮑魚熬煮的濃醇綠色鮑魚粥 전복죽 與鮑魚海鮮辣湯 전복해물뚝배기。",
      "address": "부산광역시 해운대구 달맞이길62번길 7",
      "note": "【美食】使用新鮮鮑魚與濃醇鮑魚肝熬煮，鮮美滋補！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길62번길 7",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길62번길 7",
      "estimatedCost": 35000,
      "costLabel": "計程車與雙人鮑魚粥餐費"
    },
    {
      "id": "d4-spot-2",
      "timeStart": "10:00",
      "timeEnd": "12:00",
      "title": "體驗：Skyline Luge 斜坡滑車 (2次滑車) 🏎️",
      "desc": "搭計程車 (15-20 分鐘) 前往機張 Skyline Luge，搭纜車上山，駕駛無動力賽車從蜿蜒斜坡賽道俯衝疾馳！",
      "address": "부산 기장군 기장읍 기장해안로 205",
      "note": "【VBP 紫色景點】找 VBP/售票專用櫃檯出示 VBP QR Code 兌換實體票，換好票後再去排隊搭乘纜車上山。門票務必收好（每次玩掃 QR Code），自備拋棄式浴帽戴頭盔。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 기장군 기장읍 기장해안로 205",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 기장군 기장읍 기장해안로 205",
      "estimatedCost": 12000,
      "costLabel": "前往 Luge 計程車資 (門票 VBP 免費)"
    },
    {
      "id": "d4-spot-3",
      "timeStart": "12:30",
      "timeEnd": "15:00",
      "title": "午餐：機張市場 (기장시장) 享用松葉蟹大餐 🦀",
      "desc": "搭計程車 (15-20 分鐘) 前往機張市場，現場挑選肥美活松葉蟹現蒸現吃！",
      "address": "부산광역시 기장군 기장읍 읍내로104번길 16 (기장시장)",
      "note": "【美食行情】松葉蟹正常行情價約 1 公斤 6 萬韓元。蟹肉鮮甜飽滿多汁，最後必點蟹膏炒飯！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 기장군 기장읍 읍내로104번길 16",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 기장군 기장읍 읍내로104번길 16",
      "estimatedCost": 130000,
      "costLabel": "機張市場松葉蟹雙人大餐"
    },
    {
      "id": "d4-spot-4",
      "timeStart": "15:15",
      "timeEnd": "16:30",
      "title": "下午茶：機張絕美海景咖啡廳 Peak Square ☕",
      "desc": "搭計程車 (約 12-15 分鐘，車資約 ₩8,000-10,000) 前往海岸邊超人氣 Peak Square 享受海景下午茶。",
      "address": "부산 기장군 기장읍 기장해안로 864 (피크스퀘어)",
      "note": "【海景咖啡】大片海景落地窗面對蔚藍東海，招牌麵包與手沖咖啡深受好評！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 기장군 기장읍 기장해안로 864",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 기장군 기장읍 기장해안로 864",
      "estimatedCost": 28000,
      "costLabel": "計程車與 Peak Square 咖啡點心"
    },
    {
      "id": "d4-spot-5",
      "timeStart": "16:30",
      "timeEnd": "17:45",
      "title": "漫步：海雲臺海水浴場 (해운대해수욕장) 🏖️",
      "desc": "轉場回海雲台（計程車約 20-30 分鐘，或由機張站搭東海線至 BEXCO 轉地鐵 2 號線至海雲台站 5 號出口），在海雲台沙灘散步吹海風。",
      "address": "부산 해운대구 우동 (해운대해수욕장)",
      "note": "【散步】海雲台站 5 號出口沿龜南路步行約 10 分鐘即達沙灘，夕陽時分漫步極為悠閒。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 해운대구 우동",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 해운대구 우동",
      "estimatedCost": 15000,
      "costLabel": "回海雲台計程車資"
    },
    {
      "id": "d4-spot-6",
      "timeStart": "17:45",
      "timeEnd": "20:00",
      "title": "晚餐：海雲台市場盲鰻 或 名品海雲台傳聞中蔘雞湯 🍲",
      "desc": "享用在地炭火香辣盲鰻或濃醇滋補傳聞中蔘雞湯，用餐後可接續逛市場與周邊 Olive Young。",
      "addresses": [
        {
          "label": "海雲台傳統市場 盲鰻產區 (시장 장어)",
          "address": "부산광역시 해운대구 구남로41번길 22-1"
        },
        {
          "label": "名品海雲台蔘雞湯 (해운대소문난삼계탕)",
          "address": "부산광역시 해운대구 중동2로 6"
        }
      ],
      "note": "【美食】蔘雞湯附贈人蔘酒小瓶可直接飲用或加入湯中；盲鰻是在地香辣炭火滋味！",
      "estimatedCost": 36000,
      "costLabel": "海雲台晚餐費"
    },
    {
      "id": "d4-spot-7",
      "timeStart": "20:10",
      "timeEnd": "20:30",
      "title": "夜景：The Bay 101 (더베이101) 🌃",
      "desc": "搭計程車 5 分鐘 (₩4,000-5,000) 或散步 15-20 分鐘至 The Bay 101 拍攝摩天大樓海面倒影夢幻夜景！",
      "address": "부산광역시 해운대구 동백로 52",
      "note": "【體驗】白色濱海複合建築，空地倒水拍攝海雲台高樓群倒影。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 동백로 52",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 동백로 52",
      "estimatedCost": 10000,
      "costLabel": "夜景飲料點心"
    },
    {
      "id": "d4-spot-8",
      "timeStart": "20:30",
      "timeEnd": "21:00",
      "title": "回程：海雲台 ➔ 廣安里住宿 🚕",
      "desc": "返回廣安里 H Avenue Hotel 休息。",
      "address": "부산 수영구 광안해변로278번길 42",
      "note": "【住宿】返回飯店休息。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로278번길 42",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로278번길 42",
      "estimatedCost": 12000,
      "costLabel": "回廣安里計程車資"
    }
  ],
  "day5": [
    {
      "id": "d5-spot-1",
      "timeStart": "08:15",
      "timeEnd": "08:40",
      "title": "轉場：廣安里 ➔ 尾浦車站 🚕",
      "desc": "搭計程車前往海雲台藍線公園尾浦車站 (約 20-25 分鐘)。",
      "address": "부산광역시 해운대구 달맞이길62번길 13 (尾浦站)",
      "note": "【交通】計程車前往尾浦站，建議於預約時間前 15 分鐘抵達報到。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길62번길 13",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길62번길 13",
      "estimatedCost": 12000,
      "costLabel": "計程車資"
    },
    {
      "id": "d5-spot-2",
      "timeStart": "09:00",
      "timeEnd": "09:30",
      "title": "體驗：天空膠囊列車 (尾浦站 ➔ 青沙浦站) 🚃",
      "desc": "搭乘兩人專屬彩繪天空膠囊列車，在懸空軌道上俯瞰蔚藍海岸線。",
      "address": "부산광역시 해운대구 달맞이길62번길 13",
      "note": "【自費預約】尾浦 ➔ 青沙浦。必須在預約時間前 10-15 分鐘報到取票/排隊搭乘。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길62번길 13",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길62번길 13",
      "estimatedCost": 35000,
      "costLabel": "膠囊列車車票"
    },
    {
      "id": "d5-spot-3",
      "timeStart": "09:30",
      "timeEnd": "10:30",
      "title": "海景咖啡：青沙浦海景咖啡廳 (BRONI 或 DIART) ☕",
      "desc": "抵達青沙浦後，至面海第一排落地窗咖啡廳享受海景早茶時光。",
      "addresses": [
        {
          "label": "BRONI (三層樓海景大落地窗 / 拍照絕美)",
          "address": "부산 해운대구 청사포로 135"
        },
        {
          "label": "DIART coffee (歐風溫馨 / 招牌土耳其奶油Kaymak麵包)",
          "address": "부산 해운대구 청사포로128번길 12"
        }
      ],
      "note": "【咖啡推薦】BRONI 門口拍照絕美；DIART 的土耳其奶油 Kaymak 配麵包極度知名！",
      "estimatedCost": 18000,
      "costLabel": "青沙浦咖啡點心"
    },
    {
      "id": "d5-spot-4-1",
      "timeStart": "10:30",
      "timeEnd": "11:00",
      "title": "拍照：灌籃高手海景平交道 📸",
      "desc": "青沙浦站一出站即可看到極像鎌倉高校前的灌籃高手海景平交道！",
      "address": "부산 해운대구 청사포로 120-1",
      "note": "【拍照】定位在平交道旁的「Clam Sand Busan」咖啡廳即可找到最佳合影點，拍照時請務必注意往來車輛與輕軌！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 해운대구 청사포로 120-1",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 해운대구 청사포로 120-1",
      "estimatedCost": 0,
      "costLabel": "免費參觀拍照"
    },
    {
      "id": "d5-spot-4-2",
      "timeStart": "11:00",
      "timeEnd": "11:30",
      "title": "景點：青沙浦踏石展望台 (天空步道) 🌉",
      "desc": "步行約 8 分鐘至踏石展望台，行走在懸空玻璃地板上，感受海浪從腳下流過的震撼。",
      "address": "부산광역시 해운대구 청사포로 167 (청사포 다릿돌전망대)",
      "note": "【參觀】展望台伸入海中，中段有透明玻璃與鐵網設計。需套上專用鞋套，門票免費！預計停留 20 分鐘。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 청사포로 167",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 청사포로 167",
      "estimatedCost": 0,
      "costLabel": "免費參觀"
    },
    {
      "id": "d5-spot-5",
      "timeStart": "11:30",
      "timeEnd": "13:15",
      "title": "午餐：向海開飯 (醬蟹定食) 或 青沙浦船長家 (烤貝烤盲鰻) 🦪",
      "desc": "享用向海開飯鮑魚黃花魚/醬蟹定食，或船長家綜合炭火烤貝海鮮！",
      "addresses": [
        {
          "label": "向海開飯 (올바릇식당) — 醬蟹定食／鮑魚黃花魚",
          "address": "부산광역시 해운대구 청사포로58번길 83 1층"
        },
        {
          "label": "青沙浦船長家 (선장집) — 烤貝／烤盲鰻",
          "address": "부산광역시 해운대구 청사포로 128번길 66"
        }
      ],
      "note": "【美食】享受青沙浦極致海鮮大餐！",
      "estimatedCost": 65000,
      "costLabel": "海鮮大餐午餐費"
    },
    {
      "id": "d5-spot-6",
      "timeStart": "13:15",
      "timeEnd": "13:45",
      "title": "體驗：海岸列車 (青沙浦 ➔ 尾浦) 🚆",
      "desc": "走到青沙浦車站，用 VBP BIG 5 兌換實體車票搭乘海岸列車 (10-15 分鐘) 回到尾浦。",
      "address": "부산 해운대구 청사포로 116 (청사포정거장)",
      "note": "【VBP 藍色景點】走到釜山海雲台藍線公園青沙浦車站，使用 VBP 兌換海岸列車實體車票搭回尾浦。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 해운대구 청사포로 116",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 해운대구 청사포로 116",
      "estimatedCost": 0,
      "costLabel": "海岸列車 (VBP 免費)"
    },
    {
      "id": "d5-spot-7",
      "timeStart": "13:45",
      "timeEnd": "14:30",
      "title": "點心：自然島鹽麵包 釜山店 (자연도소금빵) 🥐",
      "desc": "尾浦站對面排隊購買剛出爐外酥內軟爆香奶油鹽麵包！",
      "address": "부산 해운대구 달맞이길62번길 12-2 1층",
      "note": "【營業與出爐】每日 09:00-22:00，固定 6 個出爐時段 (09:00, 12:30, 14:00, 15:30, 17:00, 18:30)。現場自助排隊結帳，每袋 4 顆裝。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 해운대구 달맞이길62번길 12-2",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 해운대구 달맞이길62번길 12-2 1층",
      "estimatedCost": 12000,
      "costLabel": "自然島鹽麵包 (4入)"
    },
    {
      "id": "d5-spot-8",
      "timeStart": "14:30",
      "timeEnd": "18:30",
      "title": "體驗：Club D Oasis 舒壓體驗 (汗蒸幕/水療 SPA/戶外清水堂) ♨️",
      "desc": "從尾浦站步行 5 分鐘進入 LCT 大樓 5F~6F，享受高空五星級汗蒸幕與露天溫泉！",
      "address": "부산광역시 해운대구 달맞이길 30 (엘시티 5층)",
      "note": "【VBP 紫色景點】出示 VBP SPA 票免費入場 4 小時！可免費使用戶外 SPA 清水堂 (需自備泳衣) ＋ 汗蒸幕（不含水上樂園）。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산광역시 해운대구 달맞이길 30",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산광역시 해운대구 달맞이길 30",
      "estimatedCost": 0,
      "costLabel": "Club D Oasis (VBP 免費)"
    },
    {
      "id": "d5-spot-9",
      "timeStart": "18:30",
      "timeEnd": "19:00",
      "title": "轉場：Club D ➔ 廣安里 🚕",
      "desc": "搭乘計程車直達廣安里 (約 15-20 分鐘)。",
      "address": "부산 수영구 남천바다로 33번길 47",
      "note": "【交通】計程車直達廣安里。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 남천바다로 33번길 47",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 남천바다로 33번길 47",
      "estimatedCost": 15000,
      "costLabel": "計程車資"
    },
    {
      "id": "d5-spot-10",
      "timeStart": "19:00",
      "timeEnd": "21:00",
      "title": "晚餐：釜山宅 廣安里店 (專人代烤肉) 🥩",
      "desc": "享用專人代烤厚切豬五花與極品大醬湯！",
      "address": "부산 수영구 남천바다로 33번길 47 마린빌딩 2층 (부산댁 광안점)",
      "note": "【美食】地鐵 2 號線金蓮山站 3 號出口步行 8 分鐘。專人代烤外脆內嫩多汁，搭配韓式大蒜沾醬與生菜包肉絕配！",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 남천바다로 33번길 47",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 남천바다로 33번길 47",
      "estimatedCost": 70000,
      "costLabel": "釜山宅烤肉晚餐"
    }
  ],
  "day6": [
    {
      "id": "d6-spot-1",
      "timeStart": "08:30",
      "timeEnd": "10:00",
      "title": "早餐：廣安里人氣海景早午餐 Working Holiday 🥞",
      "desc": "享用廣安里海灘第一排無敵海景早午餐與熱咖啡。(12:00 前辦理退房)",
      "address": "부산 수영구 광안해변로 235 3층 (워킹홀리데이)",
      "note": "【退房與早午餐】位於廣安里海灘第一排，可由 Olive Young 廣安店旁搭乘電梯至 3 樓。愜意享用早午餐，12:00 前退房。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로 235",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로 235",
      "estimatedCost": 25000,
      "costLabel": "海景早午餐費"
    },
    {
      "id": "d6-spot-2",
      "timeStart": "10:00",
      "timeEnd": "11:00",
      "title": "廣安里最後巡禮 & 伴手禮採買 🛍️",
      "desc": "大逛廣安海灘大道 Olive Young 門市採買零食伴手禮與護膚品。",
      "address": "부산 수영구 광안해변로 219 (Olive Young 廣安海灘店)",
      "note": "【購物】現場出示護照退稅採買零食與美妝。",
      "mapLinkKakao": "https://map.kakao.com/link/search/부산 수영구 광안해변로 219",
      "mapLinkNaver": "https://map.naver.com/v5/search/부산 수영구 광안해변로 219",
      "estimatedCost": 30000,
      "costLabel": "伴手禮與零食採買"
    },
    {
      "id": "d6-spot-3",
      "timeStart": "11:00",
      "timeEnd": "12:15",
      "title": "午餐：Handasot 釜飯 (한다솥 廣安里總店) 或 冬面食小麥冷麵 🍚",
      "desc": "享用主打新鮮鮑魚雪蟹的極品現炊釜飯，或 Q 彈小麥冷麵與手工薄皮餃子！",
      "addresses": [
        {
          "label": "Handasot 釜飯 (한다솥 廣安里總店) — 海鮮釜飯",
          "address": "부산광역시 수영구 남천바다로33번길 101"
        },
        {
          "label": "冬面食小麥冷麵 (동면식밀면) — Q彈小麥冷麵／手工餃子",
          "address": "부산 수영구 광안해변로 251 1층"
        }
      ],
      "note": "【美食】Handasot 釜飯淋特製醬汁拌勻，倒大麥茶做成茶湯泡飯！冬面食小麥冷麵消暑清爽。",
      "estimatedCost": 36000,
      "costLabel": "午餐費"
    },
    {
      "id": "d6-spot-4",
      "timeStart": "12:15",
      "timeEnd": "13:00",
      "title": "轉場：廣安里 ➔ 釜山金海國際機場 🚕",
      "desc": "12:15 從廣安里搭計程車出發直達金海機場 (約 35 分鐘，車資約 ₩32,000，13:00 前抵達)。",
      "address": "부산광역시 강서구 공항진입로 108 (김해국제공항)",
      "note": "【交通】建議直接搭計程車直達機場最省力；備案為地鐵 2 號線 (廣安➔沙上) 轉輕軌 (沙上➔機場)，需預留 60-70 分鐘。",
      "mapLinkKakao": "https://map.kakao.com/link/search/김해국제공항",
      "mapLinkNaver": "https://map.naver.com/v5/search/김해국제공항",
      "estimatedCost": 32000,
      "costLabel": "機場直達計程車資"
    },
    {
      "id": "d6-spot-5",
      "timeStart": "13:00",
      "timeEnd": "15:00",
      "title": "機場報到、辦理退稅 & 買【古來思魚糕】🛍️",
      "desc": "辦理登機與托運、機台掃描退稅，在機場入關前補貨購買古來思魚糕！",
      "address": "부산광역시 강서구 공항진입로 108",
      "note": "【退稅與伴手禮】退稅單機台掃描退稅。入關前購買韓國名店古來思魚糕。",
      "mapLinkKakao": "https://map.kakao.com/link/search/김해국제공항",
      "mapLinkNaver": "https://map.naver.com/v5/search/김해국제공항",
      "estimatedCost": 10000,
      "costLabel": "古來思魚糕"
    },
    {
      "id": "d6-spot-6",
      "timeStart": "15:00",
      "timeEnd": "17:30",
      "title": "離境：德威航空起飛返台 ✈️",
      "desc": "15:00 德威航空起飛，平安返抵台灣，結束充實滿載的 6 天 5 夜釜山之旅！",
      "address": "台灣高雄國際機場 / 台南",
      "note": "【歸賦】平安抵達台灣！",
      "mapLinkKakao": "https://map.kakao.com/",
      "mapLinkNaver": "https://map.naver.com/",
      "estimatedCost": 0,
      "costLabel": "平安歸賦"
    }
  ]
};

// Shopping Guide & Clothing Brand Recommendations
const shoppingGuideData = [
  {
    area: "南浦洞光復路商圈 🛍️",
    badge: "Day 3 最推薦・店家最齊全",
    desc: "潮流大牌、大廠基礎款與風格店鋪最集中的區域，逛起來最省力！",
    female: [
      { name: "Mardi Mercredi", tag: "法式清新", desc: "韓國近兩年極火的小雛菊圖騰品牌，風格清新法式，非常適合買 T-shirt、針織衫與衛衣。" },
      { name: "ÅLAND", tag: "設計師選品", desc: "韓國代表性時尚複合選品店，集結眾多韓國新銳設計師品牌，女裝、飾品、包包風格多元不撞衫。" },
      { name: "光復路兩側女裝小店", tag: "韓系溫柔", desc: "巷弄內滿滿都是韓系質感女裝，主打溫柔系襯衫、針織外套與韓版西裝褲。" }
    ],
    male: [
      { name: "MUSINSA Standard", tag: "國民極簡・必逛旗艦", desc: "近期韓國男生最愛的「國民極簡店」！被譽為韓版高質感 Uniqlo，俐落剪裁西裝褲、素色襯衫、重磅 T-shirt 與外套，實惠且質感極佳。" },
      { name: "Wonderplace", tag: "大型潮牌選品", desc: "大型複合潮牌與休閒選品店，男裝佔比極大，包含各式寬鬆版型大學 T、工裝褲與街頭服飾。" },
      { name: "Covernat / Lee", tag: "美式復古", desc: "美式復古休閒風格，剪裁寬鬆，對男生身材非常包容且耐穿。" }
    ]
  },
  {
    area: "西面商圈 🛍️",
    badge: "Day 1-2 平價淘寶與文青風格",
    desc: "平價韓系女裝與田浦文青古著天堂！（注意：西面地下街大多 21:00 後陸續打烊）",
    female: [
      { name: "西面地下街女裝", tag: "萬元平價天堂", desc: "滿滿 10,000–20,000 韓元韓系女裝，從基本款針織衫、流行裙款到飾品應有盡有。" },
      { name: "Luft / 田浦選品小店", tag: "質感工作室", desc: "位於田浦咖啡街附近，韓國闆娘經營的質感女裝工作室，主打奶油色系與簡約風格。" },
      { name: "SPAO 西面店", tag: "極簡日常/睡衣", desc: "位於西面站 2 號出口旁中央路主幹道，男女裝平價極簡日常服、寬鬆大學 T、聯名睡衣，可現場退稅。" }
    ],
    male: [
      { name: "西面地下街男裝區", tag: "平價流行款", desc: "約佔地下街 20–30% 攤位，主打平價韓系寬版落肩襯衫、直筒休閒褲、素色棉褲。" },
      { name: "田浦 Vintage / 古著店", tag: "日系軍工裝", desc: "田浦巷弄內藏有許多古著店與日系軍工裝選品店，適合喜歡特色單品穿搭的男生。" }
    ]
  },
  {
    area: "海里團路 🛍️",
    badge: "Day 4 精緻選物與男女通用款",
    desc: "老宅改建文青小店，步調悠閒，男女生可以一起逛！",
    female: [
      { name: "Luft Haeundae / 獨立飾品店", tag: "精緻小眾", desc: "集合許多精緻韓系金屬飾品、手工包包與小眾質感女裝，風格溫柔簡約。" }
    ],
    male: [
      { name: "日系/復古男女通用選品店", tag: "Unisex 文青款", desc: "海里團路多為男女通用（Unisex）風格，包含重磅古著 T-shirt、日系文青襯衫、帽子與帆布包，男女生可一起逛。" }
    ]
  }
];

// Core Travel Preparation Notes
const travelPrepData = {
  vbp: {
    title: "Visit Busan Pass (VBP) BIG 5 數位版",
    purple: "紫色景點 (2)：CLUB D Oasis 汗蒸幕、Skyline Luge 斜坡滑車",
    blue: "藍色景點 (3)：甘川洞手翻書 Flipbook Studio、松島纜車 (來回)、海岸列車 (青沙浦➔尾浦)",
    tips: "出發前下載 Visit Busan Pass App 並綁定序號，進景點直接出示手機 QR Code 掃描即可。"
  },
  money: {
    title: "換匯與現金準備 💵",
    spots: [
      "金海機場 MONEY BOX：國際航廈 3 號出口對面「金海輕軌・機場站」1 樓驗票口前，匯率極佳！",
      "西面那英換錢所：西面站 7 號出口步行 2-3 分鐘（服飾/雜貨店內），營業時間 09:00-20:00。"
    ],
    cash: "隨身預備約 ₩50,000 ~ ₩100,000 韓元現金或台幣現金，充值交通卡、小吃攤或急用。"
  },
  taxRefund: {
    title: "退稅須知 🧾",
    rules: [
      "Olive Young 滿 3 萬韓元現場持護照退稅。",
      "單筆消費滿 15,000 韓元以上即可退稅（上限單筆 100 萬韓元，單次入境總額 500 萬韓元以內）。",
      "機場出境前至退稅機台掃描退稅單與護照領取退稅款。"
    ]
  },
  apps: {
    title: "必備 App 工具 📱",
    items: [
      "Catch Table：熱門名店抽號碼牌（水邊最高豬肉湯飯等）",
      "Kakao T / Uber：快速叫計程車與試算車資",
      "Naver Map / KakaoMap：韓國精準定位導航與路線規劃",
      "Papago：拍照即時翻譯韓語菜單與招牌"
    ]
  }
};