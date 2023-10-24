import styles from "../styles/button.module.scss"

export function Button(props: {label: string, url: string}) {
    return (
        <a href={props.url} className={styles.button} target="_blank" rel="noopener noreferrer">
            {props.label}
        </a>
    )
}