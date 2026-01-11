/**
 * 帶裝飾線標題元件 (Heading With Line)
 *
 * 此為可重複使用的 UI 元件，用於顯示帶有底部裝飾線的標題。
 * 裝飾線使用主色調 (primary color)，增加視覺區隔效果。
 *
 * 使用範例：
 * <HeadingWithLine Heading="Education" />
 */

// 匯入元件樣式
import styles from "./HeadingWithLine.module.css";

/**
 * HeadingWithLine Props 型別定義
 */
interface HeadingWithLineProps {
    /** 標題文字內容，預設值為「請輸入標題」 */
    Heading?: string;
}

/**
 * HeadingWithLine 元件
 *
 * 顯示帶有底部紅色裝飾線的 h3 標題。
 * 常用於區分個人履歷中的不同段落（如學歷、工作經驗等）。
 *
 * @param props - 元件屬性
 * @param props.Heading - 標題文字，預設為「請輸入標題」
 * @returns 帶裝飾線的標題 JSX
 */
export default function HeadingWithLine({
    Heading = "請輸入標題",
}: HeadingWithLineProps) {
    return <h3 className={styles.experienceHeading}>{Heading}</h3>;
}
