import Head from "next/head";
import Layout from "../components/layout"
import { UnderHeaderText } from "../components/under_header_text"

export default function OurWork() {
    return (
        <Layout>
            <Head>
                <title>Black Swan 3D Printing — Showcasing our 3D Prints</title>
                <meta name="title" content="Black Swan 3D Printing — Showcasing our 3D Prints" />
                <meta name="description" content="Take a look at the work we've done under the Black Swan name! High quality 3D printed works from Irvine, CA." />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://blackswan3d.com/" />
                <meta property="og:title" content="Black Swan 3D Printing — Showcasing our 3D Prints" />
                <meta property="og:description" content="Take a look at the work we've done under the Black Swan name! High quality 3D printed works from Irvine, CA." />
                <meta property="og:image" content="/images/header.png" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://blackswan3d.com/" />
                <meta property="twitter:title" content="Black Swan 3D Printing — Showcasing our 3D Prints" />
                <meta property="twitter:description" content="Take a look at the work we've done under the Black Swan name! High quality 3D printed works from Irvine, CA." />
                <meta property="twitter:image" content="/images/header.png" />


                <link rel="stylesheet" href='/static/styles/showcase.css'/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/images/favicon.ico" sizes="any"/>
                <link rel="icon" href="/images/favicon.svg" type="image/svg+xml"/>
            </Head>


            <UnderHeaderText text="OUR WORK"/>
        </Layout>
    )
}
