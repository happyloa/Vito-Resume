import styles from "./Footer.module.css";

export default function Footer() {
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
