import { ReactNode } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

import icon from 'public/celebrate_red.png'

const NavLink = ({ href, children }: { href: string; children: ReactNode }) => (
  <Link className="text-center text-lg font-semibold" href={href}>
    {children}
  </Link>
)

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="mx-auto max-w-xl p-4">
      <div className="flex justify-center">
        <Image alt="icon" className="text-clip rounded-full" width={200} height={200} src={icon} />
      </div>
      <nav className="my-8 grid grid-cols-4 gap-4">
        <NavLink href={'/'}>About</NavLink>
        <NavLink href={'/'}>Products</NavLink>
        <NavLink href={'/'}>Blog</NavLink>
        <NavLink href={'/resume.pdf'}>Resume</NavLink>
      </nav>
      {children}
      <footer className="sticky bottom-0 left-4 bg-stone-100 text-xl font-semibold md:fixed">
        <a href="" className="text-sm font-bold leading-none">
          <ArrowUpRightIcon width={65} />
          latest hack
        </a>
      </footer>
    </main>
  )
}
