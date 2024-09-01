"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./PersonalExperience.module.css";

// 引入帶有裝飾線的標題展示性元件
import HeadingWithLine from "./ui/HeadingWIthLine";

gsap.registerPlugin(ScrollTrigger);

export default function PersonalExperience() {
  useEffect(() => {
    // 對每個 experienceArticle 元素應用 fromTo 動畫
    gsap.utils.toArray(`.${styles.experienceArticle}`).forEach((article) => {
      gsap.fromTo(
        article,
        { x: -100, opacity: 0 }, // 初始狀態：左移 100px，透明度 0
        {
          x: 0, // 結束狀態：回到原始位置
          opacity: 1, // 結束狀態：完全可見
          duration: 2, // 動畫持續時間為 2 秒
          ease: "power3.out", // 使用平滑的動畫過渡效果
          scrollTrigger: {
            trigger: article, // 觸發動畫的元素
            start: "top 65%", // 當元素進入視窗 65% 處時觸發動畫
            onEnter: () => gsap.to(article, { x: 0, opacity: 1 }), // 向下滾動進入時淡入並回到原位置
            onLeaveBack: () => gsap.to(article, { x: -100, opacity: 0 }), // 向上滾動離開時淡出並左移
          },
        }
      );
    });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Vito Evans" />
          <p className={styles.mb8}>456 Walnut Avenue, Someville, USA</p>
          <p className={styles.mb8}>+1 123 456 7890</p>
          <p className={styles.mb8}>info@hexschool.com</p>
          <p className={styles.mb8}>www.infohexschool.com</p>
        </article>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Education" />
          <span>2014-2018</span>
          <p className={styles.mb16}>
            Bachelor of Science in Business Administration, University of
            California, Los Angeles
          </p>
          <span>2012-2014</span>
          <p className={styles.mb16}>
            Associate of Arts in Graphic Design, San Francisco State University
          </p>
          <span>2008-2012</span>
          <p>High School Diploma, Lincoln High School</p>
        </article>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Work" />
          <span>2018-2021</span>
          <p className={styles.mb16}>Marketing Manager, ABC Company</p>
          <span>2016-2018</span>
          <p className={styles.mb16}>Sales Associate, XYZ Corporation</p>
          <span>2014-2016</span>
          <p>Customer Service Representative, QRS Inc.</p>
        </article>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Awards" />
          <p className={styles.mb12}>
            Best in Show Award, National Advertising Awards, 2020
          </p>
          <p className={styles.mb12}>
            Honorable Mention, International Design Competition, 2019
          </p>
          <p>People's Choice Award, Local Art Exhibition, 2018</p>
        </article>
      </div>
    </section>
  );
}
