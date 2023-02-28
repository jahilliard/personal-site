import { ReactNode } from 'react'
import Image from 'next/image'
import icon from 'public/celebrate_red.png'

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto max-w-xl my-4">
      <div className="flex justify-center">
        <Image alt="icon" className="rounded-full overflow-clip" width={200} height={200} src={icon} />
      </div>
    </main>
  )
}
