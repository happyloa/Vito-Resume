"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./Hero.module.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        {/* VITO 標題 */}
        <h1
          className={styles.heading}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          VITO
        </h1>
        {/* 圖片 */}
        <img
          src="image/vito.webp"
          alt="Vito 個人照"
          className={styles.avatar}
          data-aos="fade-right"
          data-aos-duration="3000"
          data-aos-offset="200"
        />
        {/* RESUME 標題 */}
        <h2
          className={`${styles["heading"]} ${styles["end"]}`}
          data-aos="fade-up"
          data-aos-duration="2000"
          data-aos-offset="200"
        >
          RESUME
        </h2>
      </div>
    </section>
  );
}
