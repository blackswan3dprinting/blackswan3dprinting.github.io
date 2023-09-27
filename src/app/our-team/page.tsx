import styles from "../../styles/our_team.module.scss"
import Image from "next/image";
import { Metadata } from "next";
import { UnderHeaderText } from "../under_header_text"
import { Employee } from "../employee"

export const metadata: Metadata = {
    title: "Our Team — Black Swan 3D Printing",
    description: "Take a look at the faces behind the Black Swan 3D Printing operation! These individuals work tirelessly while in college to provide you with the best quality!",
    twitter: { card: "summary_large_image", site: "https://blackswan3d.com/our-team/", images: "https://blackswan3d.com/images/header.png" },
    openGraph: {type: 'website', url: 'https://blackswan3d.com/our-team/', images: "https://blackswan3d.com/images/header.png"},
    viewport: "width=device-width, initial-scale=1",
    icons: [{ rel: "icon", url: "/images/favicon.ico", sizes: "any" }, { rel: "icon", url: "/images/favicon.svg", type: "images/svg+xml" }]
}


function BuildLinkContainer(props: {type: "email" | "external", label: string, value: string}) {
    let path_to_image: string;
    if (props.type == "email") {
        path_to_image = "/images/icon_mail.svg";
    } else {
        path_to_image = "/images/icon_external.svg";
    }

    return (
        <div className={styles.contact_info}>
            <a href={props.value} target="_blank" rel="noopener noreferrer">
                <Image src={path_to_image} height="20" width="20" alt="External link" className={styles.icon}></Image><p>{props.label}</p>
            </a>
        </div>
    )
}

export default function OurTeam() {
    return (
        <div>
            <UnderHeaderText text="OUR TEAM"/>

            <div className={styles.employee_container} >
                <Employee name="Joseph Sweatt" position="Founder" photo_path="/images/joseph.jpeg" />
                <div className={styles.text_container}>
                    <h2>My Story</h2>
                    <p>Hello all!</p>

                    <p>I am Joseph Sweatt the founder of Black Swan 3D Printing. I am a 3rd Mechanical Enigneering at the University of California- Irvine.  I have interests CAD and Additive Manufacturing, Robotics, and Hydrogen Fuel Cell applications. I've been  in the Computer Aided Design and Product Design field for about 6 years and in Additive-manufacturing for 2.</p>

                    <p>Please enjoy touring our website!</p>

                    <h2>Contact Me!</h2>
                    <BuildLinkContainer type="external" label="LinkedIn" value="https://www.linkedin.com/in/josephsweattjr/" />
                    <br/>
                    <BuildLinkContainer type="email" label="joseph@blackswan3d.com" value="mailto:joseph@blackswan3d.com" />
                </div>
            </div>

            <div className={styles.employee_container} >
                <Employee name="Isaiah Sweatt" position="Social Media Manager" photo_path="/images/isaiah.jpeg" />
                <div className={styles.text_container}>
                    <h2>My Story</h2>
                    <p>I decide I wanted to be animator when use to watch Cartoons with my dad. And that moment I knew I wanted to make other laugh the same way I did.</p>

                    <h2>Contact Me!</h2>
                    <BuildLinkContainer type="external" label="Website" value="https://isaiahsweatt.com/" />
                </div>
            </div>

            <div className={styles.employee_container} >
                <Employee name="Carlos Valdez" position="Software Developer" photo_path="/images/carlos.png" />
                <div className={styles.text_container}>
                    <h2>My Story</h2>
                    <p>As far as I can remember, I've always tried to make software easier to understand. Whether it was by trying to make an iPhone easier for my grandma to use or trying to change my day-to-day apps just to experience something different, software was always at the heart of it. It was no surprise that I'd end up studying Informatics as it puts the focus on one person and one person only: the user.</p>

                    <h2>Contact Me!</h2>
                    <BuildLinkContainer type="external" label="Website" value="https://calejvaldez.com/" />
                    <br/>
                    <BuildLinkContainer type="email" label="calejvaldez@blackswan3d.com" value="mailto:calejvaldez@blackswan3d.com" />
                </div>
            </div>
        </div>
    )
}
