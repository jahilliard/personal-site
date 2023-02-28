import Head from 'next/head'
import Image from 'next/image'
import icon from 'public/celebrate_red.png'


export default function Home() {
  return (
    <>
      <Head>
        <title>Justin Hilliard</title>
        <meta name="description" content="Justin Hilliard, a technologist" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className='mx-auto max-w-xl my-4'>
<div className='flex justify-center'>
          <Image alt='icon' className='rounded-full overflow-clip' width={200} height={200} src={icon}/> 
        </div>
      </main>
    </>
  )
}
