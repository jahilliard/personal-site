import { ReactElement } from 'react'

import { Layout } from '@/components/Layout'
import { getAllPosts, Post } from '@/utils'
import Link from 'next/link'
import { Bullet } from '@/components/utils'

// next -> https://render.com/docs/custom-domains


export default function Blog({ allPosts }: { allPosts: Post[] }) {
  return (
    <ul className="space-y-2 text-xl font-medium">
      {allPosts.map((post) => (
        <li><Link href={`blog/${post.slug}`}><Bullet emoji={"📚"} />{post.title}</Link></li>
      ))}
    </ul>
  )
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticProps = async () => {
    const allPosts = getAllPosts([
      'title',
      'date',
      'slug',
      'author',
      'coverImage',
      'excerpt',
    ])
  
    return {
      props: { allPosts },
    }
  }