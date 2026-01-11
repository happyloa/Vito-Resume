/**
 * 個人簡介區塊元件 (Brief Introduction Section)
 *
 * 此元件顯示個人簡短自我介紹，使用灰色背景與右對齊排版。
 * 內容包含工作經驗、技能專長等個人資訊摘要。
 *
 * 動畫效果：
 * - 使用 fade-up 動畫（從下往上淡入）
 */
"use client";

// 匯入元件樣式
import styles from "./BriefIntroduction.module.css";

/**
 * BriefIntroduction 元件
 *
 * 呈現個人簡介文字內容，配合 AOS 動畫效果增加視覺吸引力。
 *
 * @returns 個人簡介區塊的 JSX 結構
 */
export default function BriefIntroduction() {
    return (
        <section className={styles.container}>
            <div className={styles.innerWrapper}>
                {/* 個人簡介內容 */}
                <p
                    className={styles.intro}
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-offset="80"
                >
                    I'm Vito, a UI Designer with 5+ years of experience. I create visually
                    appealing interfaces for web and mobile apps. Proficient in Sketch,
                    Adobe XD, Figma, HTML, CSS, and JavaScript. I enjoy collaborating with
                    others to create high-quality products.
                </p>
            </div>
        </section>
    );
}
