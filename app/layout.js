import "./globals.css";

export const metadata = {
  title: "Vito Resume",
  description: "2023 切版夏季班 W1 - 個人履歷",
};

export default function RootLayout({ children }) {
  return (
    <html lang="zh-Hant">
      <body>{children}</body>
    </html>
  );
}
