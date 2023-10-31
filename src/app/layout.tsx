import type { Metadata } from 'next';
import { Container } from './container';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Next13 Sample',
  description: '', // TODO: いい感じのDescriptionを考えておく
};

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="jp">
      <head>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </head>
      <body>
        <Providers>
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
