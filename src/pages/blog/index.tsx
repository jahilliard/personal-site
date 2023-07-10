import { ReactElement } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { Layout } from '@/components/Layout'
import { Bullet } from '@/components/utils'
import { getAllPosts, Post } from '@/utils'

export default function Blog({ allPosts }: { allPosts: Post[] }) {
  return (
    <ul className="space-y-2 text-xl font-medium">
      {allPosts.map((post) => (
        <li>
          <Link href={`blog/${post.slug}`}>
            <Bullet emoji={'📚'} />
            {post.title}
          </Link>
        </li>
      ))}
      <li>
        <Bullet emoji={'📚'} />
        <a href="https://incentivetheory.medium.com/" className="inline-flex">
          <span>Older Posts (links to medium) </span> <ArrowUpRightIcon className="ml-1" width={24} />
        </a>
      </li>
    </ul>
  )
}

Blog.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt'])

  return {
    props: { allPosts },
  }
}
