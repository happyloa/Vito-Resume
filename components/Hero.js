"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Hero.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useEffect(() => {
    // VITO 標題動畫
    gsap.fromTo(
      `.${styles.heading}:first-of-type`, // 第一個 heading，即 VITO
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.heading}:first-of-type`,
          start: "top 80%", // 當 VITO 元件進入視窗 80% 處時觸發動畫
        },
      }
    );

    // RESUME 標題動畫
    gsap.fromTo(
      `.${styles.heading}:last-of-type`, // 第二個 heading，即 RESUME
      { opacity: 0, scale: 0.8 },
      {
        opacity: 1,
        scale: 1,
        duration: 2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.heading}:last-of-type`,
          start: "top 50%", // 當 RESUME 元件進入視窗 50% 處時觸發動畫
        },
      }
    );

    // 圖片從左滑入動畫
    gsap.fromTo(
      `.${styles.avatar}`,
      { opacity: 0, x: -300 }, // 從左方 200px 滑入
      {
        opacity: 1,
        x: 0,
        duration: 3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: `.${styles.avatar}`,
          start: "top 70%", // 當圖片進入視窗 70% 處時觸發動畫
        },
      }
    );
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <h1 className={styles.heading}>VITO</h1>
        <img
          src="image/vito.webp"
          alt="Vito 個人照"
          className={styles.avatar}
        />
        <h2 className={`${styles["heading"]} ${styles["end"]}`}>RESUME</h2>
      </div>
    </section>
  );
}
