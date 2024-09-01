"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import styles from "./Footer.module.css";

export default function Footer() {
  useEffect(() => {
    gsap.utils.toArray(`.${styles.footer} img`).forEach((img) => {
      img.addEventListener("mouseenter", () => {
        gsap.to(img, { y: -10, duration: 0.3, ease: "bounce.out" });
      });
      img.addEventListener("mouseleave", () => {
        gsap.to(img, { y: 0, duration: 0.3, ease: "bounce.out" });
      });
    });
  }, []);

  return (
    <footer className={styles.footer}>
      <a href="#" target="_blank">
        <img src="image/fb.webp" alt="Facebook profile" />
      </a>
      <a href="#" target="_blank">
        <img src="image/instagram.webp" alt="instagram profile" />
      </a>
      <a href="#" target="_blank">
        <img src="image/line.webp" alt="Line profile" />
      </a>
    </footer>
  );
}
