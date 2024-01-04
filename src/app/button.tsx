// button.tsx
// Black Swan 3D Printing
// 
// Code for a single button.
import styles from "../styles/button.module.scss"
import localFont from "next/font/local"

const futura = localFont({
    src: "../styles/futura/futur.ttf"
})

export function Button(props: {label: string, url: string}) {
    return (
        <a href={props.url} className={styles.button} target="_blank" rel="noopener noreferrer">
            {props.label}
        </a>
    )
}