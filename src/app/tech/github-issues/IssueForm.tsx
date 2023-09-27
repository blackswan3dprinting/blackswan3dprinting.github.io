'use client'

import { useState } from "react"
import styles from "../../../styles/tech-github-issues.module.scss"

function sendForm(name: string, label: string, page: string, content: string, date: string) {
    let b = document.getElementById("submit") as HTMLButtonElement;

    b.textContent = "LOADING..."
    b.disabled = true;

    let d = new Date(date.replace(/-/g, '\/'));
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    fetch('/tech/github-issues/api/',
    {
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "label": label,
            "page": page,
            "content": content,
            "date": `${weekdays[d.getDay()]} (${d.getMonth()}/${d.getDate()})`
        })
    }).then((d) => {
        window.location.reload();
    })
}

export function IssueForm() {
    const [name, setName] = useState("Select an option:");
    const [label, setLabel] = useState("Select an option:");
    const [page, setPage] = useState("Select an option:");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("Select a date:");

    return (
        <div id={styles.submission_container}>
            <img id={styles.chalubot} src="/images/chalubot.svg" alt="Image of ChaluBot" height="150" width="150"/>
            <label className={styles.input_label} >
                Please select your name.
                <select value={name} onChange={(e) => {setName(e.target.value)}}>
                    <option hidden>Select an option:</option>
                    <option>Joseph S.</option>
                    <option>Isaiah S.</option>
                    <option>Carlos V.</option>
                </select>
            </label>

            <label className={styles.input_label}>
                What are you submitting?
                <select value={label} onChange={(e) => {setLabel(e.target.value)}} >
                    <option hidden>Select an option:</option>
                    <option value="enhancement">👀 I'd like to suggest a feature</option>
                    <option value="bug">🪲 I found a bug I'd like to report</option>
                </select>
            </label>

            <label className={styles.input_label} >
                What page is this request for?
                <select value={page} onChange={(e) => {setPage(e.target.value)}} >
                    <option hidden>Select an option:</option>
                    <option value="https://blackswan3d.com/about/">"About Us" page</option>
                    <option value="https://blackswan3d.com/our-work/">"Our work" page</option>
                    <option value="https://blackswan3d.com/our-team/">"Our Team" page</option>
                    <option value="https://blackswan3d.com/tech/github-issues/">"GitHub Issues" page</option>
                    <option value="New page">I'm requesting a new page</option>
                    <option value="N/A">N/A</option>
                </select>
            </label>

            <label className={styles.input_label}>
                What feature/bug fix would you like?
                <textarea value={content} onChange={(e) => {setContent(e.target.value)}} wrap="hard" id={styles.desc} placeholder="Let us feed birb on the website!" autoComplete="off"/>
            </label>

            <label className={styles.input_label} >
                When should we get this done by?
                <input value={date} onChange={(e) => {setDate(e.target.value)}} type="date" placeholder="Select a date:" autoComplete="off"></input>
            </label>

            <button id="submit" onClick={(e) => {sendForm(name, label, page, content, date)}}>Submit</button>

        </div>
    )
}