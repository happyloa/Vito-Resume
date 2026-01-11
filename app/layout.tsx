/**
 * 根佈局元件 (Root Layout)
 *
 * 此為 Next.js App Router 的根佈局檔案，定義了整個應用程式的基本結構。
 * 所有頁面都會繼承此佈局，包含：
 * - 全域樣式 (globals.css)
 * - CSS 變數定義 (variables.css)
 * - AOS 動畫樣式
 * - 共用頁尾元件 (Footer)
 */

import "./globals.css";
import "./variables.css";
import "aos/dist/aos.css";

// 匯入頁尾元件
import Footer from "@/components/Footer";

// 匯入 AOS 初始化元件
import AosInitializer from "@/components/AosInitializer";

// 匯入 React 型別定義
import type { ReactNode } from "react";
import type { Metadata } from "next";

/**
 * 網站 metadata 設定
 * 用於 SEO 優化和瀏覽器標籤顯示
 */
export const metadata: Metadata = {
    title: "Vito Resume",
    description: "2023 切版夏季班 W1 - 個人履歷",
};

/**
 * RootLayout Props 型別定義
 */
interface RootLayoutProps {
    children: ReactNode;
}

/**
 * 根佈局元件
 *
 * @param props - 元件屬性
 * @param props.children - 子元件（各頁面內容）
 * @returns 包含完整 HTML 結構的根佈局
 */
export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <html lang="zh-Hant">
            <body>
                {/* AOS 動畫初始化 - 僅在客戶端執行 */}
                <AosInitializer />
                {/* 頁面主要內容 */}
                {children}
                {/* 網站頁尾 - 社群媒體連結 */}
                <Footer />
            </body>
        </html>
    );
}
