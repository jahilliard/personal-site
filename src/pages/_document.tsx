import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>Justin Hilliard</title>
        <meta name="description" content="Justin Hilliard, a technologist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className="bg-stone-100 text-stone-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
