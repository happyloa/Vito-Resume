/**
 * 頁尾元件 (Footer)
 *
 * 此元件為網站頁尾區域，顯示社群媒體連結圖示：
 * - Facebook
 * - Instagram
 * - Line
 *
 * 設計特色：
 * - 黑色背景，圖示居中排列
 * - hover 效果：圖示放大 1.1 倍
 *
 * 動畫效果：
 * - 使用 fade-up 動畫（從下往上淡入）
 */
"use client";

// 匯入元件樣式
import styles from "./Footer.module.css";

/**
 * Footer 元件
 *
 * 呈現網站頁尾的社群媒體連結區域。
 * 連結設定為新分頁開啟。
 *
 * @returns 頁尾區塊的 JSX 結構
 */
export default function Footer() {
    return (
        <footer
            className={styles.footer}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-offset="50"
        >
            {/* Facebook 連結 */}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="image/fb.webp" alt="Facebook profile" />
            </a>

            {/* Instagram 連結 */}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="image/instagram.webp" alt="Instagram profile" />
            </a>

            {/* Line 連結 */}
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="image/line.webp" alt="Line profile" />
            </a>
        </footer>
    );
}
