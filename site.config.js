const CONFIG = {
  // profile setting (required)
  profile: {
    name: "ddinggu",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Cloud Engineer",
    bio: "쿠버네티스 엔지니어를 꿈꾸고 있습니다.",
    email: "officerudwls@gmail.com",
    linkedin: "경진-조-b82907220",
    github: "ddinggu",
    instagram: "",
  },
  projects: [
    {
      name: `블로그 repo`,
      href: "https://github.com/ddinggu/morethan-log",
    },
  ],
  // blog setting (required)
  blog: {
    title: "ddinggu-blog",
    description: "쿠버네티스 엔지니어를 꿈꾸고 있습니다.",
  },

  // CONFIG configration (required)
  link: "https://ddinggu-blog.vercel.app/",
  since: 2023, // If leave this empty, current year will be used.
  lang: "ko-KR", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
