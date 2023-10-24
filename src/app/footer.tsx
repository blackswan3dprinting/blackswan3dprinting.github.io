import styles from "../styles/footer.module.scss"
import { Raleway } from 'next/font/google'
import Image from "next/image"
import localFont from "next/font/local"

const raleway = Raleway({
    subsets: ['latin'],
    weight: '600',
    display: 'swap'
})

const futura = localFont({
    src: "../styles/futura/futur.ttf"
})

function LinkToSocial( {photo_path, alt_text, value} ) {
    return (
        <div className={styles.footer_socials_logo}>
            <a className={styles.footer_socials_colors} href={value} target="_blank" rel="noopener noreferrer">
                <Image src={photo_path} alt={alt_text} height="35" width="35"/>
            </a>
        </div>
    )
}

function CreateSocials() {
    return (
        <div id={styles.footer_socials}>
            <LinkToSocial photo_path="/images/etsy.png" alt_text="Etsy" value="https://www.etsy.com/shop/blackswanprinters/"/>
            <LinkToSocial photo_path="/images/instagram.svg" alt_text="Instagram" value="https://www.instagram.com/blackswan3dprinting/"/>
            <LinkToSocial photo_path="/images/linkedin.png" alt_text="LinkedIn" value="https://www.linkedin.com/company/blackswan3dprinting/"/>
            <LinkToSocial photo_path="/images/tiktok.png" alt_text="TikTok" value="https://www.tiktok.com/@blackswan3dprinters/"/>
        </div>
    )
}

function CreateContactInfo() {
    return (
        <div id={styles.footer_contact} className={raleway.className}>
            <p>Black Swan 3D Printing</p>
            <p>Irvine, CA 92617</p>
            <p><a href="tel:+19313025988">(931) 302-5988</a></p>
            <p><a href="mailto:contact@blackswan3d.com">contact@blackswan3d.com</a></p>
        </div>
    )
}

export function Footer() {
    // The footer from every page
    return (
        <footer id={styles.footer}>
            <hr></hr>
            <div id={styles.footer_content_social_container}>
                <CreateContactInfo />
                <CreateSocials />
            </div>
            <div id={styles.footer_credit} >
                <p className={futura.className}>Website designed by Austin Chun</p>
                <p className={futura.className}>Programmed by Carlos Valdez</p>
            </div>

        </footer>
    )
}