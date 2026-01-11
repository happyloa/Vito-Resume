/**
 * CSS Module 型別宣告
 * 讓 TypeScript 能正確識別 .module.css 檔案的匯入
 */
declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

/**
 * 一般 CSS 檔案型別宣告
 */
declare module "*.css" {
  const content: string;
  export default content;
}

/**
 * 圖片檔案型別宣告
 */
declare module "*.webp" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "*.jpg" {
  const src: string;
  export default src;
}

/**
 * AOS (Animate On Scroll) 模組型別宣告
 */
declare module "aos" {
  interface AosOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
  }

  interface Aos {
    init(options?: AosOptions): void;
    refresh(): void;
    refreshHard(): void;
  }

  const aos: Aos;
  export default aos;
}
