import styles from "./HeadingWithLine.module.css";

export default function HeadingWithLine({ Heading = "請輸入標題" }) {
  return <h3 className={styles.experienceHeading}>{Heading}</h3>;
}
