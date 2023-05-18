import styles from './NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Nav() {
    return( 
        <nav className={styles.navContainer}>
            <div className={styles.left}>
         
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
        Link 1
        </Link>
        
        <Link className={styles.link} href="#link2">
        Link 2
        </Link>
       
        <Link className={styles.link} href="#link3">
        Link 3
        </Link>
       
        </div>
        </nav>
    )
};