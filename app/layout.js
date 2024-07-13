import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vito Resume",
  description: "2023 切版夏季班 W1 - 個人履歷",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
