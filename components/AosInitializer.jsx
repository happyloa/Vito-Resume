/**
 * AOS 初始化元件
 *
 * 負責在客戶端掛載時初始化 AOS (Animate On Scroll) 動畫庫。
 */
"use client";

import { useEffect } from "react";
import AOS from "aos";

export default function AosInitializer() {
    useEffect(() => {
        AOS.init({
            once: true,       // 動畫只播放一次
            duration: 500,    // 預設動畫持續時間（毫秒）
            easing: "ease-out",
        });
    }, []);

    return null;
}
