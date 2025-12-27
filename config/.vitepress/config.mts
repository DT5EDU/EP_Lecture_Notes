import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "../lectures",
  base: "/EP_Lecture_Notes/",
  lang: "zh-CN",
  title: "EP Lecture Notes",
  markdown: {
    math: true
  },
  description: "Lecture notes for Embedded Processor (EP) course @ 2024-2025 Spring, Glasgow College, UESTC.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/DT5EDU/EP_Lecture_Notes' },
      { text: "StudyHub", link: "https://www.study-hub.store/materials/179" }
    ],

    sidebar: [
      {
        text: "EP Lecture Notes",
        items: [
          { text: "Lec.1 介绍", link: "Lecture1.md" },
          { text: "Lec.2 ARM 处理器 & 接口介绍", link: "Lecture2.md" },
          { text: "Lec.3 汇编语言与机器语言", link: "Lecture3.md" },
          { text: "Lec.4 嵌入式系统与项目开发周期", link: "Lecture4.md" },
          { text: "Lec.5 测试与调试 - I", link: "Lecture5.md" },
          { text: "Lec.6 测试与调试 - II", link: "Lecture6.md" },
          { text: "Lec.7 模数转换器与中断", link: "Lecture7.md" },
          { text: "Lec.7 Fix : 工作原理", link: "Lecture7_Fix.md" },
          { text: "Lec.8 数模转换器", link: "Lecture8.md" },
          { text: "Lec.9 互联集成电路 (I2C)", link: "Lecture9.md" },
          { text: "Lec.10 串行外设接口 (SPI)", link: "Lecture10.md" },
          { text: "Lec.11 模块化编程", link: "Lecture11.md" },
          { text: "Lec.12 低功耗嵌入式系统", link: "Lecture12.md" }
        ],
      },
      {
        text: "MS Review Notes",
        items: [
          { text: "Lec.9 串行通信总线和UART", link: "/MS_Review_Notes/B4P3.md" },
          { text: "Lec.10 SPI", link: "/MS_Review_Notes/B4P1.md" },
          { text: "Lec.11 I2C", link: "/MS_Review_Notes/B4P2.md" },
          { text: "Lec.12 中断，计时器和任务", link: "/MS_Review_Notes/B4P4.md" },
        ]
      }
    ],

    outline: "deep",

    lastUpdated: {
      text: 'Last Updated'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
