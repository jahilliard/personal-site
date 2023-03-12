import { ReactElement, ReactNode } from 'react'
import { Layout } from '@/components/Layout'
import markdownStyles from '@/styles/markdown-styles.module.css'
import { useRouter } from 'next/router'
import  { markdownToHtml, getAllPosts, getPostBySlug, Post } from '@/utils'
import Head from 'next/head'

const PostTitle = ({ children }: {
  children?: ReactNode
}) => {
  return (
    <h1 className="text-6xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-center md:text-left">
      {children}
    </h1>
  )
}

const PostBody = ({ content }: {
  content: string
}) => {
  return (
    <div className="max-w-2xl mx-auto">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

const PostHeader = ({ title, coverImage, date }: {
  title: string
  coverImage: string
  date: string
  // author: Author
}) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        {/* <Avatar name={author.name} picture={author.picture} /> */}
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        {/* <CoverImage title={title} src={coverImage} /> */}
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          {/* <Avatar name={author.name} picture={author.picture} /> */}
        </div>
        <div className="mb-6 text-lg">
          {/* <DateFormatter dateString={date} /> */}
        </div>
      </div>
    </>
  )
}

export default function PostPage({ post }: {
  post: Post
  // morePosts: Post[]
  // preview?: boolean
}) {
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
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                // author={post.author}
              />
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


export async function getStaticProps({ params }: {
  params: {
    slug: string
  }
}) {
  console.log(params.slug)
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])

  const content = await markdownToHtml(post.content || '')
  
  console.log(content)

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