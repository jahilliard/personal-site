import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Justin Hilliard, a technologist" />
        <meta name="title" content="Justin Hilliard, a technologist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content="/public/celebrate_red.png" />
        <meta property="og:title" content="Justin Hilliard, a technologist" />
        <meta property="og:description" content="Justin Hilliard, a technologist" />
        <meta property="og:url" content="https://jahilliard.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Justin Hilliard, a technologist" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jahilliar" />
        <meta name="twitter:creator" content="@jahilliar" />
        <meta name="twitter:title" content="Justin Hilliard, a technologist" />
        <meta name="twitter:description" content="Justin Hilliard, a technologist" />
        <meta name="twitter:image" content="/public/celebrate_red.png" />
        <link rel="icon" href="/public/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        ></link>
        {/* <link rel="apple-touch-icon" href="/public/apple-touch-icon.png" /> */}
        {/* <link rel="manifest" href="/public/manifest.json" /> */}
        {/* <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#5bbad5" /> */}
        {/* <meta name="msapplication-TileColor" content="#da532c" /> */}
        {/* <meta name="theme-color" content="#ffffff" /> */}
      </Head>
      <body className="bg-neutral-100 text-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
