import styles from "../../styles/etsy_listing.module.scss"

export function EtsyListing(props: {name: string, desc: string, url: string}) {
    return (
        <div className={styles.etsy_listing}>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>

            <a href={props.url} className={styles.etsy_button} target="_blank" rel="noopener noreferrer">
                View on <strong>Etsy</strong>
            </a>
        </div>
    )
}
