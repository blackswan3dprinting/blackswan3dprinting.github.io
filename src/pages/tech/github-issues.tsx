import Head from "next/head";
import Layout from "../../components/layout"
import styles from "../../styles/tech-github-issues.module.scss"

export default function GitHubIssues() {
    return (
        <Layout>
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

            
            
        </Layout>
    )
}
