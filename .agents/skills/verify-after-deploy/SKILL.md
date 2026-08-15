---
name: verify-after-deploy
description: >-
  每次 git push 到 GitHub Pages 後，必須開一個全新的 Chrome 視窗（無快取狀態）
  瀏覽 https://yoadcc.github.io/busan-travel-assistant/ 驗證行為是否正常。
  當 local 端確認 OK 並 push 後，請啟動此 skill 執行驗證流程。
---

# 部署後驗證 SOP

## 前提條件

在執行此 Skill 前，請確認：
1. `git push origin master` 已成功完成
2. local 端 `file://` 開啟行為正常
3. 已等待約 **1~2 分鐘**讓 GitHub Pages 完成部署

---

## 驗證步驟

### Step 1：用 browser_subagent 開啟全新 Chrome 視窗

使用 `browser_subagent` 工具，指定開新頁面（**不得重用已有的 PageID**），瀏覽：

```
https://yoadcc.github.io/busan-travel-assistant/
```

> 重點：必須用 `PageIdToReplace: "new_page"` 確保是乾淨的新分頁，
> 模擬手機或新使用者（空 localStorage、無舊快取）的第一次造訪狀況。

### Step 2：驗證「匯率換算」Tab（預設頁）

確認以下項目：

- [ ] 頁面標題顯示「釜山旅遊特助 KR」
- [ ] 匯率 banner 顯示「1 TWD = XX.XX KRW」（數字合理，通常在 38~50 之間）
- [ ] 台幣 / 韓元 輸入框存在
- [ ] 快速換算對照表有數字（不是 0 或空白）

### Step 3：點擊「釜山一日遊」Tab，驗證行程

- [ ] Tab 切換後，下拉選單顯示正確的日期選項（9/11 ~ 9/16）
- [ ] `#timeline-container` **有渲染行程卡片**（不是空白）
- [ ] 「目前行程狀態」區塊顯示正確文字（不是「載入中...」）
- [ ] 至少一張行程卡片有顯示：時間、標題、韓文地址、Kakao/Naver 連結
- [ ] 捲動頁面確認多張卡片都正常顯示

### Step 4：截圖並回報結果

拍下以下兩張截圖：
1. 匯率換算 Tab 截圖
2. 釜山一日遊 Tab（含行程卡片）截圖

並回報給使用者：
- ✅ 通過 / ❌ 失敗的項目
- 如果有失敗，說明看到的錯誤現象

---

## 常見問題排查

| 現象 | 可能原因 | 解法 |
|------|----------|------|
| 行程空白、「載入中...」卡住 | SW 快取尚未更新 | 確認 sw.js 版本號有升級並 push |
| 看到舊版內容 | GitHub Pages 尚未部署完成 | 再等 1~2 分鐘後重試 |
| 匯率顯示預設值 42.50 | 網路 API 無法連線 | 正常現象，不影響行程功能 |
| 頁面完全空白 | JS 執行錯誤 | 開 DevTools Console 查看錯誤訊息 |

---

## GitHub Pages 網址

```
https://yoadcc.github.io/busan-travel-assistant/
```
