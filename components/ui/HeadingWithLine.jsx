/**
 * 帶裝飾線標題元件
 *
 * 顯示帶有底部裝飾線的 h3 標題，用於履歷的各個段落標題。
 */

import styles from "./HeadingWithLine.module.css";

export default function HeadingWithLine({ Heading = "請輸入標題" }) {
    return <h3 className={styles.experienceHeading}>{Heading}</h3>;
}
