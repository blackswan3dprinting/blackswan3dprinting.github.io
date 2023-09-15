import styles from "../styles/under_header_text.module.scss"

export function UnderHeaderText(props: {text: string}) {
    // The header from every page
    return (
        <div id={styles.under_header_container}>
            <h1 id={styles.under_header_text}>{props.text}</h1>
        </div>
    )
}