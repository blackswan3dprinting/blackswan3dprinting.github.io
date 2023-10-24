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
            
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}