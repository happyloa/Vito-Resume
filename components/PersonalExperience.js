import styles from "./PersonalExperience.module.css";

// 引入帶有裝飾線的標題展示性元件
import HeadingWithLine from "./ui/HeadingWIthLine";

export default function PersonalExperience() {
  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Vito Evans" />
          <p>456 Walnut Avenue, Someville, USA</p>
          <p>+1 123 456 7890</p>
          <p>info@hexschool.com</p>
          <p>www.infohexschool.com</p>
        </article>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Education" />
          <p>456 Walnut Avenue, Someville, USA</p>
          <p>+1 123 456 7890</p>
          <p>info@hexschool.com</p>
          <p>www.infohexschool.com</p>
        </article>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Work" />
          <p>456 Walnut Avenue, Someville, USA</p>
          <p>+1 123 456 7890</p>
          <p>info@hexschool.com</p>
          <p>www.infohexschool.com</p>
        </article>
        <article className={styles.experienceArticle}>
          <HeadingWithLine Heading="Awards" />
          <p>Best in Show Award, National Advertising Awards, 2020</p>
          <p>Honorable Mention, International Design Competition, 2019</p>
          <p>People's Choice Award, Local Art Exhibition, 2018</p>
        </article>
      </div>
    </section>
  );
}
