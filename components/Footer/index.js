import styles from './Footer.module.css'

export default function FooterBar() {
return (
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
            <h4>BCIT Downtown FWSD</h4>
            <p>©LightSpeed 2023</p>
        </div>
        <div className={styles.third}>
            <h4>Platforms</h4>
            <h4>IOS</h4>
            <h4>Android</h4>
        </div>
    </div>
)
}