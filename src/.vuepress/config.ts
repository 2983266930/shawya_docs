import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/shawya_docs/",

  lang: "zh-CN",
  title: "shawya的技术博客",
  description: "这是shawya的技术博客",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
