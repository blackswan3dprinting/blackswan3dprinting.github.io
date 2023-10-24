import Image from "next/image";
import styles from "../styles/header.module.scss"
import style_link from "../styles/index.module.scss"

function HeaderButton( props: {link: string, label: string} ) {
    return (
        <a className={styles.header_button} href={props.link}>
            {props.label}
        </a>
    )
}

export function Header() {
    // The header from every page
    return (
        <header className={styles.header}>
            <Image src="/images/transparent-logo-bird.svg" alt="Black Swan logo" width="100" height="100"/>
            <div id={styles.header_menu_buttons}>
                <HeaderButton label="Home" link={"/"}/>
                <HeaderButton label="About" link={`#${style_link.what_we_do}`}/>
                <HeaderButton label="Services" link={`#${style_link.services}`}/>
                <HeaderButton label="Contact" link={`#${style_link.more_info}`}/>
            </div>
        </header>
    )
}