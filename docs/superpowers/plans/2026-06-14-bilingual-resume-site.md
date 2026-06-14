# Bilingual Resume Site Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立可部署至 GitHub Pages 的 React 雙語一頁式履歷網站與公開精簡 PDF。

**Architecture:** 使用型別化本地資料驅動 React section components；互動由輕量 hooks 與 CSS 完成。Vite 產生靜態輸出，GitHub Actions 負責驗證與部署。

**Tech Stack:** React 19、TypeScript、Vite、Vitest、Testing Library、CSS、python-docx、GitHub Actions

---

- [ ] 建立測試與專案設定，確認測試因尚無實作而失敗。
- [ ] 實作雙語型別化履歷資料並通過資料測試。
- [ ] 實作語言切換、專案展開及社群連結條件呈現並通過元件測試。
- [ ] 建立完整六段式響應式視覺、SEO、favicon 與 404 頁。
- [ ] 產製並渲染檢查公開精簡 PDF。
- [ ] 建立 GitHub Pages workflow 與 README。
- [ ] 執行測試、型別檢查、production build 與瀏覽器桌機／手機驗證。
