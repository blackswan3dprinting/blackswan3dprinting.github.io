import styles from "../styles/etsy_listing.module.scss"

export function EtsyListing(props: {name: string, desc: string, url: string}) {
    return (
        <div className={styles.etsy_listing}>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>

            <a href={props.url} className={styles.etsy_button} target="_blank" rel="noopener noreferrer">
                ORDER ON ETSY  ➤
            </a>
        </div>
    )
}