import styles from "../styles/etsy_listing.module.scss"
import { Button } from "./button"

export function EtsyListing(props: {name: string, desc: string, url: string}) {
    return (
        <div className={styles.etsy_listing}>
            <h1>{props.name}</h1>
            <p>{props.desc}</p>

            <Button label="ORDER ON ETSY  ➤" url={props.url} />
        </div>
    )
}