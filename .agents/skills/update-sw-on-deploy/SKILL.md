---
name: update-sw-on-deploy
description: >-
  每次修改 index.html 或 index.css 並準備 git push 到 GitHub Pages 時，
  必須先更新 sw.js 的快取版本號，否則使用者會繼續拿到舊的快取版本，導致 Bug 無法修復。
  當任何部署到 GitHub Pages 的操作發生時，請啟動此 skill。
---

# sw.js 快取版本更新 SOP

## 背景說明

這個專案（釜山旅遊特助）部署在 GitHub Pages，並使用 Service Worker (sw.js) 做離線快取。
SW 使用 **Stale-While-Revalidate** 策略：先回傳快取版本給使用者，背景才更新。

**問題**：如果修改了 `index.html` 但沒有同時升級 SW 版本號，使用者（尤其是新開瀏覽器/手機）
會繼續拿到 SW 快取裡的舊版 `index.html`，新的修正完全無效。

---

## 必做步驟（每次 push 前）

### Step 1：確認 sw.js 目前版本

打開 `f:\釜山\sw.js` 第一行，查看目前版本號：

```js
const CACHE_NAME = 'busan-travel-vN';  // N = 目前版本
```

### Step 2：將版本號 +1

將 `vN` 改為 `v(N+1)`，例如 `v8` → `v9`：

```js
const CACHE_NAME = 'busan-travel-v9';
```

### Step 3：將 sw.js 一起加入 commit

```powershell
git add index.html sw.js
git commit -m "fix/feat: <說明變更內容> + bump SW cache to vN+1"
git push origin master
```

> 千萬不要只 add index.html 而忘記 sw.js！

---

## 為什麼改版本號就能解決？

```
sw.js 版本 vN+1 != 快取中的 vN
  → SW activate 事件觸發
  → 自動刪除所有 vN 舊快取
  → 重新抓取最新 index.html、index.css
  → 使用者看到最新版本
```

---

## 快速檢查清單

在執行 git push 之前，確認以下項目：

- [ ] sw.js 第一行版本號已經 +1
- [ ] git add 包含了 sw.js
- [ ] commit message 有提到 bump SW 版本

---

## 目前版本歷史（供參考）

| 版本 | 變更內容 |
| ------ | ---------- |
| v6 | 初始版本 |
| v7 | 修正 SW 舊快取問題 |
| v8 | 修正 index.html 變數宣告 Bug（userExpenses/completedSpots 未宣告） | 這版很棒
| v9+ | 未來更新請繼續累加 |
