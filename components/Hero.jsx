/**
 * Hero 區塊元件 (Hero Section)
 *
 * 此元件為首頁最上方的主視覺區塊，包含：
 * - "VITO" 大標題（靠左對齊）
 * - 個人照片（置中顯示）
 * - "RESUME" 副標題（靠右對齊）
 *
 * 動畫效果：
 * - 標題使用 fade-up 動畫（從下往上淡入）
 * - 照片使用 fade-right 動畫（從左往右淡入）
 */
"use client";

// 匯入元件樣式
import styles from "./Hero.module.css";

/**
 * Hero 元件
 *
 * 呈現個人履歷的主視覺區域，包含姓名標題與個人照片。
 * 使用 AOS 動畫效果增加視覺吸引力。
 *
 * @returns Hero 區塊的 JSX 結構
 */
export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.innerWrapper}>
                {/* VITO 主標題 - 靠左對齊 */}
                <h1
                    className={styles.heading}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-offset="100"
                >
                    VITO
                </h1>

                {/* 個人照片 - 置中顯示 */}
                <img
                    src="image/vito.webp"
                    alt="Vito 個人照"
                    className={styles.avatar}
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-offset="100"
                />

                {/* RESUME 副標題 - 靠右對齊 */}
                <h2
                    className={`${styles["heading"]} ${styles["end"]}`}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-offset="100"
                >
                    RESUME
                </h2>
            </div>
        </section>
    );
}
