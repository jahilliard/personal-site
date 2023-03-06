import { ReactElement } from 'react'

import { Layout } from '@/components/Layout'

// next -> https://render.com/docs/custom-domains

export default function Products() {
  return (
    <>
      <ul className="space-y-2 text-lg font-medium">
        <li>
          <a href="https://chrome.google.com/webstore/detail/farseer-ai/hhgpeoclflbmfakikhjenjahcmgdlkoh?hl=en&authuser=0">
            <span className="pr-4 text-xl">🛠️</span>
            Farseer
          </a>
        </li>
        <li>
          <a href="https://functionary.run">
            <span className="pr-4 text-xl">🛠️</span>Functionary
          </a>
        </li>
        <li>
          <a href="https://superwall.com">
            <span className="pr-4 text-xl">🛠️</span>Superwall
          </a>
        </li>
        <li>
          <a href="https://staffbar.com">
            <span className="pr-4 text-xl">🛠️</span>Staffbar
          </a>
        </li>
      </ul>
    </>
  )
}

Products.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
