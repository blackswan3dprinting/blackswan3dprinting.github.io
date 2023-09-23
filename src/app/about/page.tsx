import Head from "next/head";
import Layout from "../layout"
import { UnderHeaderText } from "../under_header_text"
import { Employee } from "../employee"
import styles from "../../styles/about.module.scss"

export default function About() {
    return (
        <div>
            <Head>
                <title>About Us — Black Swan 3D Printing</title>
                <meta name="title" content="About Us — Black Swan 3D Printing" />
                <meta name="description" content="Learn more about the company that provides high-quality 3D printed works." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blackswan3d.com/about/" />
                <meta property="og:title" content="About Us — Black Swan 3D Printing" />
                <meta property="og:description" content="Learn more about the company that provides high-quality 3D printed works." />
                <meta property="og:image" content="/images/header.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://blackswan3d.com/about/" />
                <meta property="twitter:title" content="About Us — Black Swan 3D Printing" />
                <meta property="twitter:description" content="Learn more about the company that provides high-quality 3D printed works." />
                <meta property="twitter:image" content="/images/header.png" />


                <link rel="stylesheet" href='/static/styles/about.css'/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/images/favicon.ico" sizes="any"/>
                <link rel="icon" href="/images/favicon.svg" type="image/svg+xml"/>
            </Head>


            <UnderHeaderText text="ABOUT US"/>

            <div id={styles.our_mission}>
                <Employee name="Joseph Sweatt" position="Founder" photo_path="/images/joseph.jpeg" />
                <div id={styles.mission_text}>
                    <h1>Our Mission</h1>
                    <p>To create products of a remarkable</p>
                    <p>quality using innovative designs.</p>
                </div>
            </div>

            <div id={styles.history}>
                <div id={styles.joseph_swan_quote}>
                    <h3>"An inventor is an opportunist, one who takes occasion by the hand; who, having seen where some want exists, successfully applies the right means to attain the desired end"</h3>
                    <br/>
                    <h3>- Sir Joseph Swan</h3>
                </div>

                <h1 id={styles.company_history}>Company History</h1>

                <p>I founded Black Swan 3D Printing (BS3D) in October of 2022- based on an impulse to design and print all of my favorite pop culture replicas. However, my passion for digital modeling and additive manufacturing was there long beforehand. From Ironman helmets to DND minis, I've researched and sketched my designs for years. The purchase of my first 3D printer enabled me to advance my engineering and additive manufacturing dreams.</p>
                <br/>
                <p>I named the company Black Swan for two reasons. The first was Sir Joseph Wilson Swan- an English physicist, chemist, and inventor. His developments led to the invention of the first Carbon Filament Lightbulb. As an additive manufacturer,  I think of how such a small filament can become not only one of the strongest and lightest materials but one that can radiate an incandescent light depending on your use. An insight I use for materials and equipment selection. </p>
                <br/>
                <p>The second reason was the legend of a Black Swan. Before its discovery, a Black Swan was thought of as a myth. Many ancient metaphors viewed a "Black Swan" event as so unlikely it does not exist, similar to a Black Swan. However, with the animal's discovery in the late 17th Century, the metaphor changed to become an unseen event that caused a major impact. BS3D's goal is to create products of rare quality and creativity in homage to the magnificent creature.</p>
                <br/>
                <p>Since Black Swan's inception, I have made several models and prints for friends, family, clubs, and organizations. Additionally, Black Swan 3D Printing has grown to include more staff to aid in all aspects of the business. Enabling the growth of several engineers and artists in our pursuits. I started this venture in hopes of showing off my work and designs. To implement techniques and materials of high quality. Not unlike a black swan.</p>

            </div>
        </div>
    )
}
