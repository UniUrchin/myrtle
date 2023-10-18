import { Theme } from '@radix-ui/themes'
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import { NextThemeProvider } from './next-theme-provider'
import './globals.css'
import '@radix-ui/themes/styles.css'

export const metadata: Metadata = {
  title: 'Next13 Sample',
  description: '',
}

const NotoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='jp' suppressHydrationWarning>
      <head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
      </head>
      <body className={NotoSansJP.className}>
        <NextThemeProvider>
          <Theme accentColor='lime'>{children}</Theme>
        </NextThemeProvider>
      </body>
    </html>
  )
}
