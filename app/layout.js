import "./globals.css";
import "./variables.css";

import Footer from "@/components/Footer";

export const metadata = {
  title: "Vito Resume",
  description: "2023 切版夏季班 W1 - 個人履歷",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
