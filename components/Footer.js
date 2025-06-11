"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./Footer.module.css";

export default function Footer() {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <footer className={styles.footer} data-aos="fade-up" data-aos-offset="150">
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
