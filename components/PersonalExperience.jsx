/**
 * 個人經歷區塊元件 (Personal Experience Section)
 *
 * 此元件顯示詳細的個人經歷資訊，分為四個區塊：
 * 1. 聯絡資訊：地址、電話、電子郵件、網站
 * 2. 學歷：教育背景與學位
 * 3. 工作經驗：歷任職位與公司
 * 4. 獲獎紀錄：各項榮譽與獎項
 *
 * 動畫效果：
 * - 每個區塊使用 fade-right 動畫（從左往右淡入）
 */
"use client";

// 匯入元件樣式
import styles from "./PersonalExperience.module.css";

// 匯入帶有裝飾線的標題展示性元件
import HeadingWithLine from "./ui/HeadingWithLine";

/**
 * PersonalExperience 元件
 *
 * 呈現完整的個人履歷內容，包含聯絡方式、學歷、工作經驗與獲獎紀錄。
 * 每個區塊都配有 AOS 動畫效果，依序淡入呈現。
 *
 * @returns 個人經歷區塊的 JSX 結構
 */
export default function PersonalExperience() {
    return (
        <section className={styles.container}>
            <div className={styles.innerWrapper}>
                {/* 聯絡資訊區塊 */}
                <article
                    className={styles.experienceArticle}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-offset="80"
                >
                    <HeadingWithLine Heading="Vito Evans" />
                    <p className={styles.mb8}>456 Walnut Avenue, Someville, USA</p>
                    <p className={styles.mb8}>+1 123 456 7890</p>
                    <p className={styles.mb8}>info@hexschool.com</p>
                    <p className={styles.mb8}>www.infohexschool.com</p>
                </article>

                {/* 學歷區塊 */}
                <article
                    className={styles.experienceArticle}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-offset="80"
                >
                    <HeadingWithLine Heading="Education" />
                    <span>2014-2018</span>
                    <p className={styles.mb16}>
                        Bachelor of Science in Business Administration, University of
                        California, Los Angeles
                    </p>
                    <span>2012-2014</span>
                    <p className={styles.mb16}>
                        Associate of Arts in Graphic Design, San Francisco State University
                    </p>
                    <span>2008-2012</span>
                    <p>High School Diploma, Lincoln High School</p>
                </article>

                {/* 工作經驗區塊 */}
                <article
                    className={styles.experienceArticle}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-offset="80"
                >
                    <HeadingWithLine Heading="Work" />
                    <span>2018-2021</span>
                    <p className={styles.mb16}>Marketing Manager, ABC Company</p>
                    <span>2016-2018</span>
                    <p className={styles.mb16}>Sales Associate, XYZ Corporation</p>
                    <span>2014-2016</span>
                    <p>Customer Service Representative, QRS Inc.</p>
                </article>

                {/* 獲獎紀錄區塊 */}
                <article
                    className={styles.experienceArticle}
                    data-aos="fade-right"
                    data-aos-duration="700"
                    data-aos-offset="80"
                >
                    <HeadingWithLine Heading="Awards" />
                    <p className={styles.mb12}>
                        Best in Show Award, National Advertising Awards, 2020
                    </p>
                    <p className={styles.mb12}>
                        Honorable Mention, International Design Competition, 2019
                    </p>
                    <p>People's Choice Award, Local Art Exhibition, 2018</p>
                </article>
            </div>
        </section>
    );
}
