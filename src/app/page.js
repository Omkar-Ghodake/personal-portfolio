import Image from 'next/image'
import localFont from 'next/font/local'

const batmanForeverA = localFont({ src: '../fonts/batman_forever/batmfa__.ttf' })
const batmanForeverO = localFont({ src: '../fonts/batman_forever/batmfo__.ttf' })
const automata = localFont({ src: '../fonts/automata/AUTOMATA-DISPLAY.ttf' })

export default function Home() {
  return (
    <div className='home text-white flex min-h-screen'>
      <div className='w-2/5 text-sky-300'>
        {/* <Image src={"/profilePic.png"} width={400} height={400} alt='Omkar Ghodake' className='rounded-full fixed top-[24vh] left-[15.5vw]' /> */}
      </div>

      <div className='w-3/5 h-full flex flex-col pt-[10vh] px-10 space-y-10'>
        <div className="flex flex-col space-y-5">
          <h1 className={`text-right text-7xl px-5 text-white border-b w-fit ml-auto ${batmanForeverO.className}`}>WELCOME</h1>

          <h2 className={`text-right text-5xl border-b border-sky-400 py-2 px-5 w-fit ml-auto`}>
            <span className={`${batmanForeverA.className} text-white`}>I'M </span>
            <span className={`${batmanForeverO.className} text-sky-300 stroke-5`}>OMKAR GHODAKE</span>
          </h2>

        </div>

        <h3 className={`${batmanForeverA.className} text-4xl text-sky-400 w-[84%] ml-auto`}>BLOCKCHAIN APPLICATION DEVELOPER</h3>

        <p className={`text-xl ${automata.className} tracking-wider text-justify leading-8 text-white w-[84%] ml-auto`}>
          A Proficient <span className='text-sky-300'>Blockchain Developer</span> interested in contributing expertise in <span className='text-sky-300'>Web</span> and <span className='text-sky-300'>Blockchain App Development.</span> Passionate <span className='text-sky-300'>BE Student</span> with a good hands-on experience in <span className='text-sky-300'>Full Stack Web Development</span> with various web frameworks and libraries. Deeply knowledgeable in <span className='text-sky-300'>Cryptocurrency, Decentralized Applications (DApps), Smart Contracts, Distributed Ledger</span> along with slight knowledge of <span className='text-sky-300'>Blockchain Mining</span> and <span className='text-sky-300'>Cryptography.</span>
        </p>
      </div>
    </div>
  )
}
