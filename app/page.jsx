/**
 * 首頁元件 (Home Page)
 *
 * 組合所有個人履歷相關的子區塊元件（Hero、個人簡介、學經歷與獲獎紀錄）。
 */

import Hero from "@/components/Hero";
import BriefIntroduction from "@/components/BriefIntroduction";
import PersonalExperience from "@/components/PersonalExperience";

export default function Home() {
    return (
        <>
            <Hero />
            <BriefIntroduction />
            <PersonalExperience />
        </>
    );
}
