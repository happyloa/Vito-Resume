import styles from "./PersonalExperience.module.css";

// 引入帶有裝飾線的標題展示性元件
import HeadingWithLine from "./ui/HeadingWIthLine";

export default function PersonalExperience() {
  return (
    <section className={styles.container}>
      <div className={styles.innerWrapper}>
        <HeadingWithLine Heading="Vito Evans" />
      </div>
    </section>
  );
}
