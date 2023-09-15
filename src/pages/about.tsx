import Layout from "../components/layout"
import { UnderHeaderText } from "../components/under_header_text"
import { Employee } from "../components/employee"
import styles from "../styles/about.module.scss"

export default function About() {
    return (
        <Layout>
            <UnderHeaderText text="ABOUT US"/>
            <div id={styles.our_mission}>
                <Employee name="Joseph Sweatt" position="Founder" photo_path="/images/joseph.jpeg" />
                <div id={styles.mission_text}>
                    <h1>Our Mission</h1>
                    <p>To create products of a remarkable</p>
                    <p>quality using innovative designs.</p>
                </div>
            </div>
        </Layout>
    )
}
