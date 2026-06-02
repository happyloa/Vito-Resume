/**
 * 個人簡介區塊元件 (Brief Introduction Section)
 *
 * 顯示個人的簡短自我介紹。
 */
"use client";

import styles from "./BriefIntroduction.module.css";

export default function BriefIntroduction() {
    return (
        <section className={styles.container}>
            <div className={styles.innerWrapper}>
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
