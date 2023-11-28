import type { Metadata } from 'next';
import { Container } from './container';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'Myrtle',
  description:
    'Myrtle - SNS(Solo Nageki Service) where you can lament with peace of mind',
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
