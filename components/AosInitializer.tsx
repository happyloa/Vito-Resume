/**
 * AOS 初始化元件 (AOS Initializer)
 *
 * 此元件負責在客戶端初始化 AOS (Animate On Scroll) 動畫庫。
 * 使用 "use client" 標記確保此元件只在瀏覽器端執行。
 *
 * AOS 設定說明：
 * - once: true - 動畫只播放一次，捲動回去不會重複播放
 * - duration: 500 - 全域預設動畫持續時間（毫秒）
 * - easing: "ease-out" - 動畫緩動效果
 */
"use client";

import { useEffect } from "react";
import AOS from "aos";

/**
 * AOS 初始化元件
 *
 * 在元件掛載時初始化 AOS 動畫庫。
 * 此元件不渲染任何可見內容，僅負責執行初始化邏輯。
 *
 * @returns null - 此元件不渲染任何內容
 */
export default function AosInitializer(): null {
    useEffect(() => {
        // 初始化 AOS 動畫庫
        AOS.init({
            once: true, // 動畫只播放一次
            duration: 500, // 預設動畫持續時間（毫秒）
            easing: "ease-out", // 緩動效果
        });
    }, []);

    // 此元件不渲染任何 UI 元素
    return null;
}
