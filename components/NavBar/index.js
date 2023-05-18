import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    return( 
        <nav className={styles.navContainer}>
            
            <div className={styles.left}>
            <Image src="/favicon.png" width={60} height={60}/>
        <Link className={styles.link}href="#home">
        LightSpeed
        </Link>
       
        </div>
        <div className={styles.right}>
       
        <Link className={styles.link} href="#playNow">
        Play Now
        </Link>
        <Link className={styles.link} href="#game">
        Game Overview
      </Link>
       
        <Link className={styles.link} href="#link1">
        Blog 
        </Link>
        
        <Link className={styles.link} href="#link2">
        Media
        </Link>

        </div>
        </nav>
    )
};