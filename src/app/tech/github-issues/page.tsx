import styles from "../../../styles/tech-github-issues.module.scss"
import { Metadata } from "next";
import { IssueForm } from './IssueForm'

export const metadata: Metadata = {
    title: "Submit a GitHub Issue — Black Swan 3D Printing",
    description: "Did you find a bug that needs to be fixed? Or maybe you'd like to request a new feature for our website. Submit a GitHub issue using this tool!",
    twitter: { card: "summary_large_image", site: "https://blackswan3d.com/tech/github-issues/", images: "https://blackswan3d.com/images/header.png" },
    openGraph: {type: 'website', url: 'https://blackswan3d.com/tech/github-issues/', images: "https://blackswan3d.com/images/header.png"},
    viewport: "width=device-width, initial-scale=1",
    icons: [{ rel: "icon", url: "/images/favicon.ico", sizes: "any" }, { rel: "icon", url: "/images/favicon.svg", type: "images/svg+xml" }]
}

export default async function GitHubIssues() {
    return (
        <div>
            <div id={styles.container}>
                <div id={styles.description}>
                    <h1>Submit a GitHub Issue</h1>
                    <p>Our website's code is hosted <a href="https://github.com/blackswan3dprinting/blackswan3d.com" target="_blank" rel="noopener noreferrer">on GitHub</a>. One of the many benefits of GitHub is that it allows the developer team to keep track of any issues with the website. If you notice anything wrong with the website, or if you just want to suggest a feature, please fill out this form. 🧑‍🔧</p>
                </div>

                <IssueForm />
                
            </div>
            
        </div>
    )
}
