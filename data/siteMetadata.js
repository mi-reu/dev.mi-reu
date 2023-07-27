const siteMetadata = {
  title: `Miller's dev.log`,
  author: 'mi-reu',
  headerTitle: 'dev.log',
  description: '',
  language: 'ko-KR',
  theme: 'system', // system, dark or light
  siteUrl: 'https://devlog.mi-reu.vercel.app',
  siteRepo: 'https://github.com/mi-reu/dev.mi-reu',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/og-image.png',
  email: 'dev.mireu@gmail.com',
  github: 'https://github.com/mi-reu',
  linkedin: 'https://www.linkedin.com/in/%EB%AF%B8%EB%A5%B4-%EA%B9%80-531a9325b',
  locale: 'ko-KR',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports plausible, simpleAnalytics, umami or googleAnalytics
    plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    simpleAnalytics: false, // true or false
    umamiWebsiteId: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
  },
  comment: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    // provider: 'giscus', // supported providers: giscus, utterances, disqus
    // giscusConfig: {
    //   // Visit the link below, and follow the steps in the 'configuration' section
    //   // https://giscus.app/
    //   repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
    //   repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
    //   category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
    //   categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
    // },
  },
}

module.exports = siteMetadata
