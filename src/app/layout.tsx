import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='jp'>
      <head />
      {/* <body>{children}</body> */}
      <body className={NotoSansJP.className}>{children}</body>
    </html>
  )
}
