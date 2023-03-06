import { ReactElement } from 'react'
import { GetStaticPropsContext } from 'next'
import ReactMarkdown from 'react-markdown'

import { Layout } from '@/components/Layout'

export async function getStaticProps(context: GetStaticPropsContext) {
  console.log(context.params)
  return {
    props: {
      markdown: '## Hello world',
    }, // will be passed to the page component as props
  }
}

export default function Post({ markdown }: { markdown: string }) {
  return <ReactMarkdown>{markdown}</ReactMarkdown>
}

Post.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
