import styles from '../styles/index.module.scss';
import { Button } from './button';
import { EtsyListing } from './etsy_listing';
import { Raleway } from 'next/font/google';

const raleway = Raleway({
    subsets: ['latin']
})

export default function Index() {
    return (
        <div className={styles.body}>
            <div className={`${styles.headline} ${raleway.className}`}>
                <h1>YOUR PREMIER 3D PRINTING SERVICE.</h1>
                <p>Get your ideas printed with the highest quality materials from a business you can trust.</p>
                <a href={`#${styles.services}`}>View our Services ➤</a>
            </div>

            <div id={styles.what_we_do}>
                <div id={styles.what_we_do_text}>
                    <h1 className={raleway.className}>WHAT WE DO</h1>
                    <p>At Black Swan 3D Printing, our priority is to give you the highest quality 3D prints at the best rates in the industry. We strive to be your most reliable 3D print-on-demand service. Whether you need an idea modeled with a Computer Aided Design tool or have a part that needs to be printed, we will make sure to assist with all your printing needs. </p>
                </div>
                <img src="/images/deadpool.jpg" height="250" alt="3D print of the Marvel character Deadpool"></img>
            </div>

            <div id={styles.services}>
                <h1 className={raleway.className}>SERVICES</h1>
                <div id={styles.services_boxes}>

                    <EtsyListing name="DESIGN YOUR IDEA" desc="Need a part for a project or want to turn something into a 3D model? No problem! We can develop digital models for you using CAD software." url="https://www.etsy.com/listing/1561453537/"/>
                    <EtsyListing name="PRINT YOUR STL FILES" desc="Want your files to become a reality? Our line of industrial level 3D printers will ensure your concepts become creation with the best materials and care possible." url="https://www.etsy.com/listing/1547874520/" />
                </div>
            </div>

            <div id={styles.more_info}>
                <h1 className={raleway.className}>NEED MORE INFO?</h1>
                <p>Have a project with specific requirements? Just follow the link and we will get back to you.</p>
                <Button label="CONTACT US  ➤" url="https://instagram.com/blackswan3dprinting" />
            </div>
        </div>
    )
}