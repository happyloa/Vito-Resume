/**
 * 首頁元件 (Home Page)
 *
 * 此為網站的首頁，包含個人履歷的主要內容區塊：
 * - Hero 區塊：個人照片與姓名標題
 * - BriefIntroduction 區塊：個人簡介
 * - PersonalExperience 區塊：學經歷與獲獎紀錄
 */

// 匯入頁面元件
import Hero from "@/components/Hero";
import BriefIntroduction from "@/components/BriefIntroduction";
import PersonalExperience from "@/components/PersonalExperience";

/**
 * 首頁元件
 *
 * 組合所有履歷相關的子元件，呈現完整的個人履歷頁面
 *
 * @returns 首頁完整內容
 */
export default function Home() {
    return (
        <>
            {/* 主視覺區塊 - 個人照片與 VITO RESUME 標題 */}
            <Hero />
            {/* 個人簡介區塊 - 灰色背景區域 */}
            <BriefIntroduction />
            {/* 個人經歷區塊 - 學歷、工作經驗、獲獎紀錄 */}
            <PersonalExperience />
        </>
    );
}
