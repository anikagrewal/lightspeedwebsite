import styles from './Footer.module.css'

export default function FooterBar() {
return (
    <div>
    <div className={styles.container}>
        <div className={styles.first}>
            <h4>About Us</h4>
            <h4>Support</h4>
            <p>Contact Us</p>
            <p>Terms of Use</p>
        </div>
        <div className={styles.sec}>
            <h4>Studios</h4>
            <h4>BCIT Burnaby MD3</h4>
            <h4>BCIT Downtown FSWD</h4>
            <p>©LightSpeed 2023</p>
        </div>
        <div className={styles.third}>
            <h4>Platforms</h4>
            <h4>IOS</h4>
            <h4>Android</h4>
        </div>
    
    </div>
     <div className={styles.altcontainer}>
        <div className={styles.sub}>
     <h1>Subscribe</h1>
     <h4>To our email to receive notifications on the latest news</h4>
     </div>
     <div className={styles.input}>
     <input className={styles.ema} type="email" name="email" placeholder="Enter your email"/>
     <button className={styles.btn}>SUBSCRIBE</button>
     </div>
 </div>
 </div>
)
}