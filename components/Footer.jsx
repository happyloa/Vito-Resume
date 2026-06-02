/**
 * 頁尾元件 (Footer)
 *
 * 呈現社群媒體連結按鈕。
 */
"use client";

import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer
            className={styles.footer}
            data-aos="fade-up"
            data-aos-duration="400"
            data-aos-offset="50"
        >
            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="image/fb.webp" alt="Facebook profile" />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="image/instagram.webp" alt="Instagram profile" />
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer">
                <img src="image/line.webp" alt="Line profile" />
            </a>
        </footer>
    );
}
