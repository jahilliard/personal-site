import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import { Layout } from '@/components/Layout'
import { getAllPosts, getPostBySlug, markdownToHtml, Post } from '@/utils'

import markdownStyles from '@/styles/markdown-styles.module.css'

const PostTitle = ({ children }: { children?: ReactNode }) => {
  return (
    <h1 className="mb-12 text-center text-6xl font-bold leading-tight tracking-tighter md:text-left md:leading-none">
      {children}
    </h1>
  )
}

const PostBody = ({ content }: { content: string }) => {
  return (
    <div className="mx-auto max-w-2xl">
      <div className={markdownStyles['markdown']} dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}

const PostHeader = ({ title, date }: { title: string; date: string }) => {
  return <PostTitle>{title}</PostTitle>
}

export default function PostPage({ post }: { post: Post }) {
  const router = useRouter()
  return (
    <>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{post.title}</title>
              <meta property="og:image" content={post.ogImage.url} />
            </Head>
            <PostHeader title={post.title} date={post.date} />
            <PostBody content={post.content} />
          </article>
        </>
      )}
    </>
  )
}

PostPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export async function getStaticProps({
  params,
}: {
  params: {
    slug: string
  }
}) {
  const post = getPostBySlug(params.slug, ['title', 'date', 'slug', 'content', 'ogImage'])

  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
