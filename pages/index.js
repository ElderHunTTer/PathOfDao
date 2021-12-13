import Head from 'next/head'
import DaoButton from '../components/dao_button'
import DiscordButton from '../components/discord_button'
import GitCoinButton from '../components/gitcoin_button'
import NotionButton from '../components/notion_button'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Path Of Dao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className={'flex flex-row justify-evenly bg-green-200 px-2 w-full'}>
        <div>
          Home
        </div>
        <div>
          Stuff
        </div>
        <div>
          Stuff
        </div>
        <div>
          <image href={""} />
        </div>
        <div>
          Wallet Info
        </div>
      </nav>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <DaoButton />
        <DiscordButton background={"discord_logos.png"}/>
        <NotionButton background={"notion_logo.png"} />
        <GitCoinButton background={"gitcoin.png"} />
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  )
}
