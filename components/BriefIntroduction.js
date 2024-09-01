"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import styles from "./BriefIntroduction.module.css";

// 註冊 ScrollTrigger 插件
gsap.registerPlugin(ScrollTrigger);

export default function BriefIntroduction() {
  useEffect(() => {
    // 設定動畫，向下滾動時淡入，向上滾動時淡出
    gsap.fromTo(
      `.${styles.intro}`,
      { y: 50, opacity: 0 }, // 起始位置：下移 50px，透明度 0
      {
        y: 0, // 結束位置：回到原始位置
        opacity: 1, // 結束狀態：完全可見
        duration: 1.5, // 動畫持續時間為 1.5 秒
        ease: "power3.out", // 使用平滑的動畫過渡效果
        scrollTrigger: {
          trigger: `.${styles.intro}`, // 觸發動畫的元素
          start: "top 65%", // 當元素進入視窗 65% 處時觸發動畫
          onEnter: () => gsap.to(`.${styles.intro}`, { opacity: 1 }), // 向下滾動進入時淡入
          onLeaveBack: () => gsap.to(`.${styles.intro}`, { opacity: 0 }), // 向上滾動離開時淡出
        },
      }
    );
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <p className={styles.intro}>
          I'm Vito, a UI Designer with 5+ years of experience. I create visually
          appealing interfaces for web and mobile apps. Proficient in Sketch,
          Adobe XD, Figma, HTML, CSS, and JavaScript. I enjoy collaborating with
          others to create high-quality products.
        </p>
      </div>
    </section>
  );
}
