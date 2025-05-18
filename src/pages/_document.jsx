import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Basit bir Canvas benzeri eğitim platformu" />
        <link rel="icon" href="/avatar.png" />
        {/* Google Fonts örneği */}
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
      </Head>
      <body className="bg-gray-50 text-gray-900 font-sans">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
