import styles from "./BriefIntroduction.module.css";

export default function BriefIntroduction() {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.innerWrapper}>
          <p className={styles.intro}>
            I'm Vito, a UI Designer with 5+ years of experience. I create
            visually appealing interfaces for web and mobile apps. Proficient in
            Sketch, Adobe XD, Figma, HTML, CSS, and JavaScript. I enjoy
            collaborating with others to create high-quality products.
          </p>
        </div>
      </section>
    </>
  );
}
