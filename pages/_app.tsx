import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import setupLocatorUI from '@locator/runtime'

if (process.env.NODE_ENV === 'development') {
  setupLocatorUI()
}

import siteMetadata from '@/data/siteMetadata'
// import Analytics from '@/components/analytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
