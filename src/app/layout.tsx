import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { ChakraProviders } from './chakra-provider';
import '@/styles/global.css';

export const metadata: Metadata = {
  title: 'Next13 Sample',
  description: '', // TODO: いい感じのDescriptionを考えておく
};

const NotoSansJP = Noto_Sans_JP({
  weight: ['400', '700'],
  subsets: ['latin'],
});

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body className={NotoSansJP.className}>
        <ChakraProviders>{children}</ChakraProviders>
      </body>
    </html>
  );
}
