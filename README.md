# David Wei Resume

這是一個用 React、TypeScript、Vite 製作的個人履歷網站，內容以 David Wei 的公開履歷為主。網站支援繁體中文與英文切換，並部署到 GitHub Pages。

公開網址：

```text
https://davidwell60707.github.io/resume/
```

## 專案用途

這個專案主要用來放置線上履歷與作品摘要，讓訪客可以快速看到：

- 個人簡介與求職方向
- 工作經歷
- 代表專案
- 技術能力
- 學歷與證照
- Email 聯絡方式
- 可下載的公開履歷 PDF

它不是後端服務，也沒有資料庫。所有履歷內容都放在前端程式碼與 `public` 靜態檔案中。

## 技術棧

| 類型 | 使用技術 |
|---|---|
| Frontend | React 19、TypeScript |
| Build tool | Vite 8 |
| UI / Icon | CSS、lucide-react |
| Test | Vitest、Testing Library、jsdom |
| Deploy | GitHub Actions、GitHub Pages |
| Runtime | Node.js 22（GitHub Actions 使用） |

## 目錄結構

```text
resume/
├─ .github/workflows/
│  └─ deploy-pages.yml          # GitHub Pages 自動部署流程
├─ public/
│  ├─ profile-photo.png         # 首頁個人照片
│  ├─ david-wei-resume-public.pdf
│  ├─ favicon.svg
│  ├─ og-card.svg
│  └─ 404.html
├─ scripts/
│  └─ generate_public_resume.py # 產生公開履歷 PDF 的腳本
├─ src/
│  ├─ App.tsx                   # 網站主要版面與區塊元件
│  ├─ main.tsx                  # React 入口
│  ├─ styles.css                # 全站樣式與 RWD
│  ├─ content/
│  │  ├─ resume.ts              # 中英文履歷內容
│  │  └─ types.ts               # 履歷資料型別
│  ├─ hooks/
│  │  ├─ useLocale.ts           # 語系切換
│  │  └─ useReveal.ts           # 滾動進場動畫
│  └─ test/
│     └─ setup.ts               # 測試環境設定
├─ index.html                   # SEO、OG、JSON-LD 與 root DOM
├─ vite.config.ts               # Vite 與 GitHub Pages base path 設定
└─ package.json                 # npm scripts 與套件版本
```

## 本機開發

第一次下載專案後先安裝依賴：

```powershell
npm install
```

啟動開發伺服器：

```powershell
npm run dev
```

預設網址通常是：

```text
http://localhost:5173/
```

如果 5173 port 已被占用，Vite 會自動改用其他 port，請以終端機顯示的 URL 為準。

## 常用指令

| 指令 | 用途 |
|---|---|
| `npm run dev` | 啟動本機開發伺服器 |
| `npm run typecheck` | 執行 TypeScript 型別檢查 |
| `npm test` | 執行單元測試與樣式規則測試 |
| `npm run build` | 建立正式版輸出到 `dist/` |
| `npm run preview` | 預覽正式版 build 結果 |

建議在提交前至少跑：

```powershell
npm run typecheck
npm test
npm run build
```

## 如何修改履歷內容

大部分文字內容都在：

```text
src/content/resume.ts
```

常見修改位置：

| 想修改的內容 | 檔案 |
|---|---|
| 姓名、職稱、簡介、Email | `src/content/resume.ts` |
| 工作經歷 | `src/content/resume.ts` |
| 代表專案 | `src/content/resume.ts` |
| 技術能力 | `src/content/resume.ts` |
| 中英文導覽列文字 | `src/content/resume.ts` |
| 資料型別 | `src/content/types.ts` |
| 版面、顏色、手機版樣式 | `src/styles.css` |
| 首頁照片 | `public/profile-photo.png` |
| 公開履歷 PDF | `public/david-wei-resume-public.pdf` |
| SEO、Open Graph、JSON-LD | `index.html`、`src/App.tsx` |

如果新增欄位，請先更新 `src/content/types.ts`，再調整 `src/content/resume.ts` 與 `src/App.tsx`。

## 語系切換

網站目前支援兩種語系：

- `zh-TW`
- `en`

語系資料集中在 `resumeContent`：

```text
src/content/resume.ts
```

切換邏輯在：

```text
src/hooks/useLocale.ts
```

## 樣式與 RWD

主要樣式集中在：

```text
src/styles.css
```

目前樣式重點：

- 桌機版採履歷紙本感的留白與雙欄節奏
- 手機版會重新排列 Hero、照片、按鈕與專案 accordion
- `@media (max-width: 900px)` 處理平板與手機導覽列
- `@media (max-width: 620px)` 處理手機版主要版面
- `prefers-reduced-motion` 會關閉大部分動畫，降低動態干擾

修改手機版時，請特別留意 sticky header 的高度，避免錨點跳轉後內容被導覽列蓋住。

## 測試範圍

目前測試主要涵蓋：

- 語系切換
- 預設語系行為
- 首頁照片載入
- 社群連結未設定時不顯示
- 代表專案 accordion 展開與收合
- 代表專案一次只展開一個
- 英文版排版規則
- 手機版照片與代表專案樣式規則
- 履歷內容資料基本完整性

測試檔案：

```text
src/App.test.tsx
src/styles.test.ts
src/content/resume.test.ts
```

## GitHub Pages 部署

部署流程定義在：

```text
.github/workflows/deploy-pages.yml
```

觸發方式有兩種：

1. push 到 `main`
2. 在 GitHub Actions 手動執行 `Run workflow`

workflow 會依序執行：

```text
npm ci
npm run typecheck
npm test
npm run build
upload-pages-artifact
deploy-pages
```

GitHub Pages 設定應使用：

```text
Settings -> Pages -> Source -> GitHub Actions
```

這個專案是 GitHub Pages 的 Project Pages，因此正式環境 base path 是 `/resume/`。設定在：

```text
vite.config.ts
```

```ts
base: process.env.GITHUB_ACTIONS ? "/resume/" : "/",
```

本機開發使用 `/`，GitHub Actions build 時使用 `/resume/`。

## 產生公開 PDF

PDF 檔案位於：

```text
public/david-wei-resume-public.pdf
```

產生腳本：

```text
scripts/generate_public_resume.py
```

這支腳本使用 ReportLab，並依賴 Windows 字型路徑：

```text
C:\Windows\Fonts\msjh.ttc
C:\Windows\Fonts\msjhbd.ttc
```

如果在非 Windows 環境執行，需先調整字型路徑。

## 隱私與公開內容

這是公開履歷網站，部署後所有 `public/` 內容都能被訪客存取。提交前請確認：

- 不要放身分證字號、住址、私人電話等敏感資料
- 不要提交私人履歷版本
- 不要放未授權的客戶資料或內部系統截圖
- PDF 與網站文字都應只保留可公開資訊

## 維護注意事項

- 不要手動修改 `dist/`，它是 build 產物。
- 修改內容後請跑 `npm test` 與 `npm run build`。
- 修改 `vite.config.ts` 的 `base` 前，先確認 GitHub Pages URL 是否仍是 `/resume/`。
- 修改照片或 PDF 後，建議清除瀏覽器快取或用無痕視窗確認。
- 若 GitHub Pages 沒更新，先看 GitHub Actions 是否成功，再確認 Pages Source 是否設定為 GitHub Actions。

