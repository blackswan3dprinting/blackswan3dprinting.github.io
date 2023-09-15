import Image from "next/image";
import styles from "../styles/employee.module.scss"

export function Employee(props: {name: string, position: string, photo_path: string}) {
    // View of the employee from /about/ and /our-team/
    return (
        <div className={styles.photo_container}>
            <Image className={styles.image_of_employee} src={props.photo_path} alt={"Photo of " + props.name} height="200" width="200"></Image>
            <h2>{props.name}</h2>
            <p>{props.position}</p>
        </div>
    )
}
