/**
 * 根佈局元件 (Root Layout)
 *
 * 定義網站整體基本架構，載入全域樣式、變數、AOS 動畫與共用頁尾元件。
 */

import "./globals.css";
import "./variables.css";
import "aos/dist/aos.css";
import Footer from "@/components/Footer";
import AosInitializer from "@/components/AosInitializer";

export const metadata = {
    title: "Vito Resume",
    description: "2023 切版夏季班 W1 - 個人履歷",
};

export default function RootLayout({ children }) {
    return (
        <html lang="zh-Hant">
            <body>
                <AosInitializer />
                {children}
                <Footer />
            </body>
        </html>
    );
}
