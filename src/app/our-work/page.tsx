import { Metadata } from "next";
import { EtsyListing } from "./etsy_listing";
import styles from "../../styles/our_work.module.scss"
import { UnderHeaderText } from "../under_header_text"

export const metadata: Metadata = {
    title: "Black Swan 3D Printing — Showcasing our 3D Prints",
    description: "Take a look at the work we've done under the Black Swan name! High quality 3D printed works from Irvine, CA.",
    twitter: { card: "summary_large_image", site: "https://blackswan3d.com/our-work/", images: "https://blackswan3d.com/images/header.png" },
    openGraph: {type: 'website', url: 'https://blackswan3d.com/our-work/', images: "https://blackswan3d.com/images/header.png"},
    viewport: "width=device-width, initial-scale=1",
    icons: [{ rel: "icon", url: "/images/favicon.ico", sizes: "any" }, { rel: "icon", url: "/images/favicon.svg", type: "images/svg+xml" }]
}

export default function OurWork() {
    return (
        <div>
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