/* eslint-disable @next/next/no-page-custom-font */
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <title>Kaimana Koed</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Chango&display=swap"
          rel="stylesheet"
        />
        <script>
          {
            /* js */ `
            let vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', \`\${vh}px\`);
            `
          }
        </script>
      </Head>
      <body>
        <div className="main-bg absolute -z-10"></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
