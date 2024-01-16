// page.tsx
// Black Swan 3D Printing
// 
// The main page found on blackswan3d.com
import styles from '../styles/index.module.scss';
import { Button } from './button';
import { EtsyListing } from './etsy_listing';
import { Raleway } from 'next/font/google';
import localFont from 'next/font/local';
import type { Metadata } from 'next';

// This is the metadata found when you link the page on other websites.
// Cool tool for this: https://discord.com/developers/embeds
// Read the docs: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#metadata-fields
export const metadata: Metadata = {
    metadataBase: new URL('https://blackswan3d.com'),
    title: "Black Swan 3D Printing - Rare quality and design",
    description: "Get rare quality products from a business you can trust: Black Swan 3D Printing. We're located in Irvine, California.",
    twitter: { title: "Black Swan 3D Printing - Rare quality and design", description: "Get rare quality products from a business you can trust: Black Swan 3D Printing. We're located in Irvine, California.", card: "summary_large_image", site: "https://blackswan3d.com/", images: "https://blackswan3d.com/images/header.png" },
    openGraph: {title: "Black Swan 3D Printing - Rare quality and design", description: "Get rare quality products from a business you can trust: Black Swan 3D Printing. We're located in Irvine, California.", type: 'website', url: 'https://blackswan3d.com/', images: "https://blackswan3d.com/images/header.png"},
    viewport: "width=device-width, initial-scale=1",
    icons: [{ rel: "icon", url: "/images/favicon.ico", sizes: "any" }, { rel: "icon", url: "/images/favicon.svg", type: "images/svg+xml" }],
    alternates: {
        canonical: '/',
        languages: {
          'en-US': '/en-US'
        },
      },
}

// Sets Futura/Raleway fonts
const futura = localFont({
    src: "../styles/futura/futur.ttf"
})

const raleway = Raleway({
    subsets: ['latin']
})

export default function Index() {
    return (
        <div className={styles.body}>
            <div className={`${styles.headline} ${raleway.className}`}>
                <h1>YOUR PREMIER 3D PRINTING SERVICE.</h1>
                <p className={futura.className}>Get your ideas printed with the highest quality materials from a business you can trust.</p>
                <a className={futura.className} href={`#${styles.services}`}>View our Services ➤</a>
            </div>

            <div className={styles.what_we_do} id="what_we_do">
                <div id={styles.what_we_do_text}>
                    <h1 className={raleway.className}>WHAT WE DO</h1>
                    <p className={futura.className} >At Black Swan 3D Printing, our priority is to give you the highest quality 3D prints at the best rates in the industry. We strive to be your most reliable 3D print-on-demand service. Whether you need an idea modeled with a Computer Aided Design tool or have a part that needs to be printed, we will make sure to assist with all your printing needs. </p>
                </div>
                <img src="/images/deadpool.jpg" height="250" alt="3D print of the Marvel character Deadpool"></img>
            </div>

            <div className={styles.services} id="services">
                <h1 className={raleway.className}>SERVICES</h1>
                <div id={styles.services_boxes}>

                    <EtsyListing name="DESIGN YOUR IDEA" desc="Need a part for a project or want to turn something into a 3D model? No problem! We can develop digital models for you using CAD software." url="https://www.etsy.com/listing/1561453537/"/>
                    <EtsyListing name="PRINT YOUR STL FILES" desc="Want your files to become a reality? Our line of industrial level 3D printers will ensure your concepts become creation with the best materials and care possible." url="https://www.etsy.com/listing/1547874520/" />
                </div>
            </div>

            <div className={styles.more_info} id="more_info">
                <h1 className={raleway.className}>NEED MORE INFO?</h1>
                <p className={futura.className} >Have a project with specific requirements? Just follow the link and we will get back to you.</p>
                <Button label="EMAIL US  ➤" url="mailto:contact@blackswan3d.com" />
            </div>
        </div>
    )
}