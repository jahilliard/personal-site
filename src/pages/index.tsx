import { ReactElement } from 'react'

import { Layout } from '@/components/Layout'

// next -> https://render.com/docs/custom-domains

export default function Home() {
  return (
    <>
      <h1 className="hidden">About Justin Hilliard</h1>
      <article className="space-y-4 text-xl leading-loose">
        <section className=" text-6xl">👋</section>
        <section>
          I'm Justin Hilliard. I like technology, surfing, and coffee. I've done a few (self-proclaimed) interesting
          things over the years. Feel free to reach out to me somewhere on the internet.
        </section>
        <ul className="space-y-2 text-lg font-medium">
          <li>
            <a href="https://twitter.com/jahilliar">
              <span className="pr-4 text-2xl">🐦</span> Twitter
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jhilliard1/">
              <span className="pr-4 text-2xl">💼</span> Linkedin
            </a>
          </li>
          <li>
            <a href="mailto:justin.a.hilliard@gmail.com">
              <span className="pr-4 text-2xl">💌</span> Email
            </a>
          </li>
        </ul>
      </article>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
