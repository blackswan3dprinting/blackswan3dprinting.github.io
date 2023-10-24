import styles from "../styles/etsy_listing.module.scss"
import { Button } from "./button"
import { Raleway } from "next/font/google"

const raleway = Raleway({
    subsets: ['latin']
})

export function EtsyListing(props: {name: string, desc: string, url: string}) {
    return (
        <div className={styles.etsy_listing}>
            <h1 className={raleway.className} >{props.name}</h1>
            <p>{props.desc}</p>

            <Button label="ORDER ON ETSY  ➤" url={props.url} />
        </div>
    )
}