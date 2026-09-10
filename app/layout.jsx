import { GoogleAnalytics, GoogleTagManager } from '@next/third-parties/google';

import { Chatbot } from '@/components';
import { rootMetadata } from '@/config';
import { neue_montreal } from '@/fonts';
import { Providers } from '@/providers';
import './globals.css';

const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var isDark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (e) {}
})();
`;

/** @type {import('next').Metadata} */
export const metadata = rootMetadata;

/** @param {import('react').PropsWithChildren<unknown>} */
export default function RootLayout({ children }) {
  return (
    <html
      lang='en'
      dir='ltr'
      className={neue_montreal.variable}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <GoogleTagManager gtmId='GTM-KPC28N3H' />
      <GoogleAnalytics gaId='G-V4YN3PBQ67' />
      <body className={neue_montreal.className}>
        <noscript>
          <iframe
            src='https://www.googletagmanager.com/ns.html?id=GTM-KPC28N3H'
            height='0'
            width='0'
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <Providers>
          {children}
          <Chatbot />
        </Providers>
      </body>
    </html>
  );
}
