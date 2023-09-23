import Head from "next/head";
import Layout from "../../layout"
import Image from "next/image";
import styles from "../../../styles/tech-github-issues.module.scss"


function TextSubmission(props: {type: "text" | "date", label: string, placeholder: string, autocomplete: "name" | "off"}) {
    return (
        <label className={styles.input_label}>
            {props.label}
            <input type={props.type} placeholder={props.placeholder} autoComplete={props.autocomplete}/>
        </label>
    )
}

export default function GitHubIssues() {
    return (
        <div>
            <Head>
                <title>Submit a GitHub Issue — Black Swan 3D Printing</title>
                <meta name="title" content="Submit a GitHub Issue — Black Swan 3D Printing" />
                <meta name="description" content="Did you find a bug that needs to be fixed? Or maybe you'd like to request a new feature for our website. Submit a GitHub issue using this tool!" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blackswan3d.com/tech/github-issues/" />
                <meta property="og:title" content="Submit a GitHub Issue — Black Swan 3D Printing" />
                <meta property="og:description" content="Did you find a bug that needs to be fixed? Or maybe you'd like to request a new feature for our website. Submit a GitHub issue using this tool!" />
                <meta property="og:image" content="/images/header.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://blackswan3d.com/tech/github-issues/" />
                <meta property="twitter:title" content="Submit a GitHub Issue — Black Swan 3D Printing" />
                <meta property="twitter:description" content="Did you find a bug that needs to be fixed? Or maybe you'd like to request a new feature for our website. Submit a GitHub issue using this tool!" />
                <meta property="twitter:image" content="/images/header.png" />


                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/images/favicon.ico" sizes="any"/>
                <link rel="icon" href="/images/favicon.svg" type="image/svg+xml"/>
            </Head>

            <div id={styles.container}>
                <div id={styles.description}>
                    <h1>Submit a GitHub Issue</h1>
                    <p>Our website's code is hosted <a href="https://github.com/blackswan3dprinting/blackswan3d.com" target="_blank" rel="noopener noreferrer">on GitHub</a>. One of the many benefits of GitHub is that it allows the developer team to keep track of any issues with the website. If you notice anything wrong with the website, or if you just want to suggest a feature, please fill out this form. 🧑‍🔧</p>
                </div>

                <div id={styles.submission_container}>
                    <Image id={styles.chalubot} src="/images/chalubot.svg" alt="Image of ChaluBot" height="150" width="150"></Image>

                    <TextSubmission type="text" label="Name" placeholder="Joseph S." autocomplete="name" />

                    <label className={styles.input_label}>
                        What are you submitting?
                        <select>
                            <option hidden>Select an option:</option>
                            <option value="enhancement">👀 I'd like to suggest a feature</option>
                            <option value="bug">🪲 I found a bug I'd like to report</option>
                        </select>
                    </label>

                    <label className={styles.input_label}>
                        What page is this request for?
                        <select>
                            <option hidden>Select an option:</option>
                            <option value="https://blackswan3d.com/about/">"About Us" page</option>
                            <option value="https://blackswan3d.com/our-work/">"Our work" page</option>
                            <option value="https://blackswan3d.com/our-team/">"Our Team" page</option>
                            <option value="New page">I'm requesting a new page</option>
                            <option value="N/A">N/A</option>
                        </select>
                    </label>

                    <TextSubmission type="text" label="What feature/bug fix would you like?" placeholder="Let us feed birb on the website!" autocomplete="off"/>
                    <TextSubmission type="date" label="When should we get this done by?" placeholder="Select a date:" autocomplete="off"/>

                    <button>Submit</button>
            
                </div>
            </div>
            
        </div>
    )
}
