"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./PersonalExperience.module.css";

// 引入帶有裝飾線的標題展示性元件
import HeadingWithLine from "./ui/HeadingWIthLine";

export default function PersonalExperience() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <article
          className={styles.experienceArticle}
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="150"
        >
          <HeadingWithLine Heading="Vito Evans" />
          <p className={styles.mb8}>456 Walnut Avenue, Someville, USA</p>
          <p className={styles.mb8}>+1 123 456 7890</p>
          <p className={styles.mb8}>info@hexschool.com</p>
          <p className={styles.mb8}>www.infohexschool.com</p>
        </article>
        <article
          className={styles.experienceArticle}
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="150"
        >
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
        <article
          className={styles.experienceArticle}
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="150"
        >
          <HeadingWithLine Heading="Work" />
          <span>2018-2021</span>
          <p className={styles.mb16}>Marketing Manager, ABC Company</p>
          <span>2016-2018</span>
          <p className={styles.mb16}>Sales Associate, XYZ Corporation</p>
          <span>2014-2016</span>
          <p>Customer Service Representative, QRS Inc.</p>
        </article>
        <article
          className={styles.experienceArticle}
          data-aos="fade-right"
          data-aos-duration="2000"
          data-aos-offset="150"
        >
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
