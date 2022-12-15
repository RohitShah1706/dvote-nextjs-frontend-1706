import Head from 'next/head'
import styles from "../components/constants/styles"
import { Navbar, Header, Stats, GetStarted, World,Business, Testimonials, Footer } from "../components";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>D-VOTE</title>
        <meta name="description" content="D-VOTE - Your way to decentralized voting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='gradient__bg'>
        <Navbar />
        <Header />
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} my-[100px]`}>
          <div className='flex justify-center '>
            <Stats />
          </div>
          <Business />
        </div>
      </div>    
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
      </div> 
      <World /> 
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth} my-[100px]`}>
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  )
}
