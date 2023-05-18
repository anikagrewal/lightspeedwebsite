import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Nav from '@/components/NavBar'
import VideoPromo from '@/components/PromoVideo'
import FooterBar from '@/components/Footer'
import Carousel from '@/components/Carousel'
import AlienCar from '@/components/AlienCaro'

export default function Home() {
  return (
    <>
      <Head>
        <title>LightSpeed
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
      <Nav/>
      <div >
    <VideoPromo/>
      </div>
        <div className={styles.beware}>
        <div className={styles.attention}>
        <h3 className={styles.fast}>For the Fastest Astronaut</h3>
      <h1 className={styles.header}>Light Speed</h1>
      <button className={styles.playbtn}>Play Now</button>
        </div>
          <Image className={styles.img}src="/images/blackhole.png" width={1200} height={800}/>
          </div>
          <div className={styles.game}>
            <h2 className={styles.gameHeader}>GAME OVERVIEW</h2>
           <div className={styles.container}>
            <div className={styles.basics}>
              <p className={styles.basTxt}>Learn the Basics</p>
            <Image className={styles.sun} src="/images/sun1.png" width={395} height={385}/>
            </div>
            <div className={styles.rightCol}>
              <div className={styles.mini}>
              <p className={styles.miniTxt}>Mini Games</p>
            <Image className={styles.card} src="/images/card1.png" width={200} height={200}/>
                </div>
              <div className={styles.plan}>
              <p className={styles.planTxt}>Game Plan</p>
            <Image className={styles.load} src="/images/plan.png" width={170} height={170}/>
                </div>
            </div>
           </div>
        </div>
        <div className={styles.characters}>
          <h2 className={styles.gameHeader}>MEET THE CHARACTERS</h2>
          <div className={styles.caro}>
          <Carousel/>
          </div>
        </div>
        <div className={styles.comp}>
          <h2 className={styles.gameHeader}>COMPANIONS</h2>
         <div className={styles.alicar}> <AlienCar/>
         </div>
        </div>
        <div className={styles.high}>
          <h2 className={styles.gameHeader}>HIGHLIGHTS</h2>
          <div className={styles.quotes}>
          <h4 className={styles.quo}>"One of the best online board games around!"</h4>
          <p className={styles.name}>-Nancy BC</p>
          <h4 className={styles.quo}>"The mini games keep you on the edge of your seats!"</h4>
          <p className={styles.name}>-Jayden ON </p>
          <h4 className={styles.quo}>"The theme is a really cool concept!"</h4>
          <p className={styles.name}>-Lilly AB</p>
          </div>
        </div>
        <FooterBar/>
      </main>
    </>
  )
}
