![](https://i.imgur.com/Xca9mSf.png)

# 六角學院 2023 切版夏季班 W1 - 個人履歷

此專案為六角學院 2023 切版夏季班 W1 - 個人履歷之成品

- [線上部署連結](https://vito-resume.pages.dev/)
- [設計稿](https://www.figma.com/design/eB5X8OYO4whPx3btCZdr3w/2023-%E5%88%87%E7%89%88%E5%A4%8F%E5%AD%A3%E7%8F%AD-W1---%E5%80%8B%E4%BA%BA%E5%B1%A5%E6%AD%B7?node-id=0-1&t=4bpBBLS1e1JmEtYD-0)

## 使用技術

- [Next.js 16](https://nextjs.org/)（React 框架）
- [TypeScript](https://www.typescriptlang.org/)（型別安全的 JavaScript）
- [React 19](https://react.dev/)
- [AOS](https://github.com/michalsnik/aos)（捲動動畫效果）

## 開發環境設置

建議使用 [VSCode](https://code.visualstudio.com/) 搭配以下擴充套件：

- [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
- [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) 或任何 TypeScript 支援套件

## 快速開始

**專案設置（Project setup）**

將專案複製到本地端

```sh
git clone https://github.com/happyloa/Vito-Resume.git
```

套件安裝

```sh
cd Vito-Resume
npm install
```

**執行專案（Start the server）**

```sh
npm run dev
```

在瀏覽器上輸入

```
http://localhost:3000/
```

即可在本地端預覽專案

## 頁面路徑（Router Link）

位於 `app`

結構說明

```
app
├── favicon.ico                          網站圖示
├── globals.css                          全域樣式
├── variables.css                        CSS 變數定義
├── layout.tsx                           網站整體架構（根佈局）
└── page.tsx                             首頁（/）
```

## 元件檔案（Components）

位於 `components`

結構說明

```
components
├── AosInitializer.tsx                   AOS 動畫初始化元件
├── Hero.tsx                             主視覺區塊（個人照、標題）
├── Hero.module.css                      主視覺區塊樣式
├── BriefIntroduction.tsx                個人簡介
├── BriefIntroduction.module.css         個人簡介樣式
├── PersonalExperience.tsx               個人經歷（學歷、工作、獲獎）
├── PersonalExperience.module.css        個人經歷樣式
├── Footer.tsx                           網站頁尾
├── Footer.module.css                    網站頁尾樣式
└── ui                                   UI 元件庫
    ├── HeadingWithLine.tsx              帶裝飾線的標題元件
    └── HeadingWithLine.module.css       帶裝飾線標題樣式
```

## TypeScript 設定

專案使用 TypeScript 進行開發，相關設定檔：

- `tsconfig.json` - TypeScript 編譯設定
- `global.d.ts` - 全域型別宣告（CSS Module、圖片檔案）
- `next.config.ts` - Next.js 設定檔（TypeScript 版本）

## 靜態檔案

位於 `public/image`

結構說明

```
public
└── image
    ├── fb.webp                          Facebook 圖示
    ├── instagram.webp                   Instagram 圖示
    ├── line.webp                        Line 圖示
    └── vito.webp                        個人照片
```

## 程式碼規範

- 所有程式碼皆使用 TypeScript 撰寫
- 遵循 ESLint 與 Next.js 官方程式碼規範
- 所有元件與樣式檔案皆附有繁體中文註解

## 使用的套件 & 工具

- [AOS](https://github.com/michalsnik/aos) 用於捲動動畫
- [TinyPNG](https://tinypng.com/)
- [ChatGPT 4o](https://openai.com/)
