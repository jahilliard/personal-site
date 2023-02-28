import { Layout } from '@/components/Layout'
import Head from 'next/head'
import { ReactElement } from 'react'

export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Hilliard</title>
        <meta name="description" content="Justin Hilliard, a technologist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
