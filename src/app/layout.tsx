import type { ReactNode } from 'react';
import { Figtree, Fira_Code } from 'next/font/google';
import clsx from 'clsx';

import Sidebar from 'components/Sidebar';

import 'styles/index.css';
import 'styles/globals.css'; // TODO: Remove once not needed
import 'styles/prism.css';

const font = Figtree({
  subsets: ['latin'],
  variable: '--font-family',
  fallback: ['sans-serif'],
});
const fontMono = Fira_Code({
  subsets: ['latin'],
  variable: '--font-family-mono',
  fallback: ['monospace'],
});

export const metadata = {
  title: { template: '%s | App', default: 'App' },
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html className={clsx(font.variable, fontMono.variable)}>
      <head>
        <link rel='icon' type='image/x-icon' href='/favicon.png' />
      </head>
      <body>
        <Sidebar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
