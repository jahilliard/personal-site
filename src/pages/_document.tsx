import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Justin Hilliard, a technologist" />
        <meta name="title" content="Justin Hilliard, a technologist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-neutral-100 text-neutral-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
