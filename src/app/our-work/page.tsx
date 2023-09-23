import Head from "next/head";
import { EtsyListing } from "./etsy_listing";
import styles from "../../styles/our_work.module.scss"
import { UnderHeaderText } from "../under_header_text"

export default function OurWork() {
    return (
        <div>
            <Head>
                <title>Black Swan 3D Printing — Showcasing our 3D Prints</title>
                <meta name="title" content="Black Swan 3D Printing — Showcasing our 3D Prints" />
                <meta name="description" content="Take a look at the work we've done under the Black Swan name! High quality 3D printed works from Irvine, CA." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blackswan3d.com/" />
                <meta property="og:title" content="Black Swan 3D Printing — Showcasing our 3D Prints" />
                <meta property="og:description" content="Take a look at the work we've done under the Black Swan name! High quality 3D printed works from Irvine, CA." />
                <meta property="og:image" content="/images/header.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://blackswan3d.com/" />
                <meta property="twitter:title" content="Black Swan 3D Printing — Showcasing our 3D Prints" />
                <meta property="twitter:description" content="Take a look at the work we've done under the Black Swan name! High quality 3D printed works from Irvine, CA." />
                <meta property="twitter:image" content="/images/header.png" />


                <link rel="stylesheet" href='/static/styles/showcase.css'/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/images/favicon.ico" sizes="any"/>
                <link rel="icon" href="/images/favicon.svg" type="image/svg+xml"/>
            </Head>


            <UnderHeaderText text="OUR WORK"/>
            <div id={styles.etsy_container}>
                <h1>Our Etsy Shop</h1>
                
                <div id={styles.listings_container}>
                <EtsyListing name="Printing Your Idea" desc="Have a part for a project your working on? You can benefit from the analysis and the development of having Computer Aided modeling. Create more visual representations of your idea for production and troubleshooting. Improving overall design quality. Need a promotional product for your club, business or organization? Black Swan 3D Printing can help! Using our services allows you to create more custom PLA keychains, Coasters, even signs." url="https://www.etsy.com/listing/1561453537/" />
                <EtsyListing name="Printing your STL File" desc="Take advantage of our printing service and print a personal STL file out. Great for those who have who have prototyped digitally modelled. Additionally, its great for those who purchase a prop file or don't have their own 3D printer." url="https://www.etsy.com/listing/1547874520/" />
                </div>

            </div>
        </div>
    )
}