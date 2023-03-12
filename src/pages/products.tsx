import { ReactElement } from 'react'

import { Layout } from '@/components/Layout'
import { Bullet } from '@/components/utils'

// next -> https://render.com/docs/custom-domains

export default function Products() {
  return (
    <>
      <ul className="space-y-2 text-xl font-medium">
        <li>
          <a href="https://chrome.google.com/webstore/detail/farseer-ai/hhgpeoclflbmfakikhjenjahcmgdlkoh?hl=en&authuser=0">
            <Bullet emoji={"🛠️"} />
            Farseer
          </a>
        </li>
        <li>
          <a href="https://functionary.run">
            <Bullet emoji={"🛠️"} />Functionary
          </a>
        </li>
        <li>
          <a href="https://superwall.com">
            <Bullet emoji={"🛠️"} />Superwall
          </a>
        </li>
        <li>
          <a href="https://staffbar.com">
            <Bullet emoji={"🛠️"} />Staffbar
          </a>
        </li>
      </ul>
    </>
  )
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
