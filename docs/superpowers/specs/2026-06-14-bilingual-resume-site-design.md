# Bilingual Resume Site Design

## Goal

建立一個部署於 GitHub Pages 的一頁式雙語履歷網站，將魏大為定位為 Senior Java Backend Engineer / System Analyst。

## Content

網站依序包含 Hero、核心價值、代表專案、工作經歷、技術能力、About／學歷／證照與聯絡區。內容事實只取自使用者提供的 PDF 與兩份 DOCX，避免添加未經證實的職稱、數字、證照或專案成果。

公開版保留公司名稱，但將內部系統名稱、精確架構與敏感資料流程去識別。電話、生日與詳細地址不公開，所在地只顯示台北／新北，聯絡方式使用 Email。

## Visual System

採深海軍藍背景、暖白文字、青綠主色與少量琥珀提示。版面使用大型中英文字標、細線技術網格、開放式專案列表與克制時間軸，不使用紫色漸層、玻璃擬態、技能百分比或重複卡片牆。

## Interaction

提供錨點導覽、目前章節提示、繁中／英文切換、專案詳情展開、滾動揭露與返回頂端。支援鍵盤、清楚 focus 樣式與 `prefers-reduced-motion`。

## Delivery

使用 React、TypeScript 與 Vite，內容集中於型別化雙語資料。GitHub Actions 執行型別檢查、測試、建置並部署 Pages。另提供移除敏感資訊的 1–2 頁繁中公開 PDF。
