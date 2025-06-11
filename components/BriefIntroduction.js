"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import styles from "./BriefIntroduction.module.css";

export default function BriefIntroduction() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <p
          className={styles.intro}
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-offset="150"
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
