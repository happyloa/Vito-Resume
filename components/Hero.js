"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./Hero.module.css";

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  useLayoutEffect(() => {
    // VITO 標題動畫
    gsap.fromTo(
      `.${styles.heading}:first-of-type`, // 選取第一個 heading，即 VITO
      {
        opacity: 0, // 起始時透明度設為 0（完全不可見）
        scale: 0.8, // 起始時縮放設為 0.8（稍微縮小）
      },
      {
        opacity: 1, // 動畫結束時透明度設為 1（完全可見）
        scale: 1, // 動畫結束時縮放設為 1（恢復原大小）
        duration: 2, // 動畫持續時間為 2 秒
        ease: "power3.out", // 使用平滑的動畫過渡效果
        scrollTrigger: {
          trigger: `.${styles.heading}:first-of-type`, // 觸發動畫的元素為第一個 heading（VITO）
          start: "top 80%", // 當元素進入視窗 80% 處時觸發動畫
        },
      }
    );

    // RESUME 標題動畫
    gsap.fromTo(
      `.${styles.heading}:last-of-type`, // 選取第二個 heading，即 RESUME
      {
        opacity: 0, // 起始時透明度設為 0（完全不可見）
        scale: 0.8, // 起始時縮放設為 0.8（稍微縮小）
      },
      {
        opacity: 1, // 動畫結束時透明度設為 1（完全可見）
        scale: 1, // 動畫結束時縮放設為 1（恢復原大小）
        duration: 2, // 動畫持續時間為 2 秒
        ease: "power3.out", // 使用平滑的動畫過渡效果
        scrollTrigger: {
          trigger: `.${styles.heading}:last-of-type`, // 觸發動畫的元素為第二個 heading（RESUME）
          start: "top 50%", // 當元素進入視窗 50% 處時觸發動畫
        },
      }
    );

    // 圖片從左滑入動畫
    gsap.fromTo(
      `.${styles.avatar}`, // 選取圖片元素
      {
        opacity: 0, // 起始時透明度設為 0（完全不可見）
        x: -300, // 起始時水平位置設為 -300px，從左側滑入
      },
      {
        opacity: 1, // 動畫結束時透明度設為 1（完全可見）
        x: 0, // 動畫結束時水平位置設為 0，回到原始位置
        duration: 3, // 動畫持續時間為 3 秒
        ease: "power3.out", // 使用平滑的動畫過渡效果
        scrollTrigger: {
          trigger: `.${styles.avatar}`, // 觸發動畫的元素為圖片
          start: "top 70%", // 當圖片進入視窗 70% 處時觸發動畫
        },
      }
    );
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        {/* VITO 標題 */}
        <h1 className={styles.heading}>VITO</h1>
        {/* 圖片 */}
        <img
          src="image/vito.webp"
          alt="Vito 個人照"
          className={styles.avatar}
        />
        {/* RESUME 標題 */}
        <h2 className={`${styles["heading"]} ${styles["end"]}`}>RESUME</h2>
      </div>
    </section>
  );
}
