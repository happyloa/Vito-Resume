/**
 * 主視覺區塊元件 (Hero Section)
 *
 * 顯示首頁最上方的個人姓名與大頭照。
 */
"use client";

import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.container}>
            <div className={styles.innerWrapper}>
                <h1
                    className={styles.heading}
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-offset="100"
                >
                    VITO
                </h1>

                <img
                    src="image/vito.webp"
                    alt="Vito 個人照"
                    className={styles.avatar}
                    data-aos="fade-right"
                    data-aos-duration="800"
                    data-aos-offset="100"
                />

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
