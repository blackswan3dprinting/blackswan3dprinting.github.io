import styles from '../styles/index.module.scss';
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
                <a href="">View our Services ➤</a>
            </div>

            <div id={styles.what_we_do}>
                <div id={styles.what_we_do_text}>
                    <h1 className={raleway.className}>WHAT WE DO</h1>
                    <p>At Black Swan 3D Printing, our priority is to give you the highest quality 3D prints at the best rates in the industry. We strive to be your most reliable 3D print-on-demand service. Whether you need an idea modeled with a Computer Aided Design tool or have a part that needs to be printed, we will make sure to assist with all your printing needs. </p>
                </div>
                <img src="/images/deadpool.jpg" height="250" alt="3D print of the Marvel character Deadpool"></img>
            </div>

            <div></div>
            
            <div></div>
        </div>
    )
}