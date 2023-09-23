import Layout from "../../layout";
import Head from "next/head";
import styles from "../../../styles/tech_chalubot.module.scss"

export default function ChaluBot() {
    return (
        <div>
            <Head>
                <title>ChaluBot — Black Swan 3D Printing</title>
                <meta name="title" content="ChaluBot — Black Swan 3D Printing" />
                <meta name="description" content="ChaluBot is Black Swan's assistant in the digital word. On GitHub, Discord, and anywhere ChaluBot can access." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blackswan3d.com/tech/chalubot/" />
                <meta property="og:title" content="ChaluBot — Black Swan 3D Printing" />
                <meta property="og:description" content="ChaluBot is Black Swan's assistant in the digital word. On GitHub, Discord, and anywhere ChaluBot can access." />
                <meta property="og:image" content="/images/chalubot_header.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://blackswan3d.com/tech/chalubot/" />
                <meta property="twitter:title" content="ChaluBot — Black Swan 3D Printing" />
                <meta property="twitter:description" content="ChaluBot is Black Swan's assistant in the digital word. On GitHub, Discord, and anywhere ChaluBot can access." />
                <meta property="twitter:image" content="/images/chalubot_header.png" />

                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/images/favicon.ico" sizes="any"/>
                <link rel="icon" href="/images/favicon.svg" type="image/svg+xml"/>
            </Head>

            <div id={styles.introducing}>
                <h1 className={styles.introducing_text}>Introducing</h1>
                <img id={styles.chalubot} src="/images/chalubot.svg" alt="Photo of ChaluBot" />
                <h1 className={styles.introducing_text}>ChaluBot</h1>
            </div>

            <div id={styles.integrations}>
                <div className={styles.row}>
                    <div>
                        <h3>Integrations</h3>
                        <h3>Integrations</h3>
                        <h3>Integrations</h3>
                    </div>

                    <div id={styles.logos}>
                        <img src="/images/discord.svg" />
                        <img src="/images/github.svg" />
                    </div>
                </div>

                <p>ChaluBot's goal is to integrate into everything Black Swan. It seamlessly integrates with our Discord server, enhancing collaboration and communication among team members.</p>
                <p>ChaluBot also stays on top of GitHub issues, allowing for developers and users to collaborate. All within the familiar Discord environment.</p>
                
            </div>

            <div id={styles.friendly}>
                <h3>Friendly & Recognizable</h3>

                <p>ChaluBot's logo and brand stays consistent throughout. He's not just another wall of code, but rather, he is our top employee at Black Swan.</p>

                <img src="/images/chalupa_irl.jpg" />
                <p>(irl chalupa!)</p>
            </div>

            <div id={styles.open}>
                <h1 className={styles.introducing_text}>Transparent</h1>
                <h3>(and <a href="https://github.com/blackswan3dprinting/chalubot/" target="_blank" rel="noopener noreferrer">open source</a>!)</h3>

                <p>Open source projects are important. ChaluBot full code is available to view on GitHub. It provides safety, transparency, and security. It allows for the open-source community to contribute if they so wish.</p>
            </div>

            <div id={styles.bestest}>
                <h3>ChaluBot's the bestest!</h3>
            </div>
        </div>
    )
}