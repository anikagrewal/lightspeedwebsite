import styles from './NavBar.module.css'
import Image from 'next/image'
import React from 'react'

export default function Nav() {
    const scrollToSection = (id) => {
      const element = document.getElementById(id);
      element.scrollIntoView({behavior: 'smooth'});
    };
  
    return( 
        <nav className={styles.navContainer}>
            
            <div className={styles.left}>
            <Image src="/favicon.png" width={60} height={60}/>
        <a className={styles.link} onClick={() => scrollToSection('home')}>
        LightSpeed
        </a>
       
        </div>
        <div className={styles.right}>
       
        <a className={styles.link} onClick={() => scrollToSection('playnow')}>
        Play Now
        </a>
        <a className={styles.link} onClick={() => scrollToSection('game')}>
        Game Overview
      </a>
     
        <a className={styles.link} onClick={() => scrollToSection('charac')}>
        Characters
        </a>
        
        <a className={styles.link} onClick={() => scrollToSection('about')}>
        About Us
        </a>

        </div>
        </nav>
    )
};