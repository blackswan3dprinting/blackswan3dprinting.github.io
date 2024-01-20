// header.tsx
// Black Swan 3D Printing
// 
// Contains the code to the header of the website.
import Image from "next/image";
import styles from "../styles/header.module.scss"
import style_link from "../styles/index.module.scss"

// A simple, clickable button function
function HeaderButton( props: {link: string, label: string} ) {
    return (
        <a className={styles.header_button} href={props.link}>
            {props.label}
        </a>
    )
}

export function Header() {
    return (
        <header className={styles.header}>
            <Image src="/images/transparent-logo-bird.svg" alt="Black Swan logo" width="100" height="100"/>
            <div id={styles.header_menu_buttons}>
                <HeaderButton label="Home" link="/"/>
                <HeaderButton label="About" link="#what_we_do"/>
                <HeaderButton label="Services" link="#services"/>
                <HeaderButton label="Contact" link="#more_info"/>
            </div>
        </header>
    )
}