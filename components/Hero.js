import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.innerWrapper}>
          <h1 className={styles.name}>VITO</h1>
          <img
            src="image/vito.webp"
            alt="Vito 個人照"
            className={styles.avatar}
          />
          <h2 className={styles.heading}>RESUME</h2>
        </div>
      </section>
    </>
  );
}
