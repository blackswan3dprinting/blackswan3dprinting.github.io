'use client'

import { useState } from "react"
import styles from "../../../styles/tech-github-issues.module.scss"

function sendForm(name: string, label: string, page: string, content: string, date: string) {
    let b = document.getElementById("submit") as HTMLButtonElement;

    b.textContent = "LOADING..."
    b.disabled = true;

    fetch('/tech/github-issues/api/',
    {
        method: 'POST',
        body: JSON.stringify({
            "name": name,
            "label": label,
            "page": page,
            // we add the ⚠️ to indicate to developers that deliverables have not been set
            "content": `⚠️ ${content}`,
            "date": date
        })
    }).then(async (res) => {
        const a = await res.json();

        if (Object.keys(a).includes("error")) {
            alert("Sorry, an error occured. Please contact Carlos.");
            window.location.reload();
        } else {
            window.location.href = a['url']
        }
    })
}

export function IssueForm() {
    const [name, setName] = useState("Select an option:");
    const [label, setLabel] = useState("Select an option:");
    const [page, setPage] = useState("Select an option:");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("Select a date:");

    function parseDate(d: string): string {
        let old_date = new Date(d.replace(/-/g, '\/'));
        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

        return `${weekdays[old_date.getDay()]} (${old_date.getMonth()}/${old_date.getDate()})`
    }

    function next(id_to_hide: string, id_label_to_change: string, label_content: string, id_to_unhide: string) {
        document.getElementById(id_to_hide).hidden = true;
        document.getElementById(id_label_to_change).textContent = label_content;
        document.getElementById(id_to_unhide).hidden = false;
    }

    function checkContinue(size: number) {
        document.getElementById("button-to-continue").hidden = size === 0;
    }


    return (
        <div id={styles.submission_container}>
            <img id={styles.chalubot} src="/images/chalubot.svg" alt="Image of ChaluBot" height="150" width="150"/>

            <div className={styles.make_sure} >
                <p className={styles.input_label} >Please make sure the following is accurate:</p>
                <p id="label-name" ></p>
                <p id="label-label" ></p>
                <p id="label-page" ></p>
                <p id="description-label"></p>
                <p id="label-deadline" ></p>
            </div>

            <div id="input-name">
            <label className={styles.input_label} >
                Please select your name.
                <select id="select-name" value={name} onChange={(e) => {setName(e.target.value), next("input-name", "label-name", `Name: ${e.target.value}`, "input-bug-or-enhancement")}}>
                    <option hidden>Select an option:</option>
                    <option>Joseph S.</option>
                    <option>Isaiah S.</option>
                    <option>Carlos V.</option>
                </select>
            </label>
            </div>

            <fieldset id="input-bug-or-enhancement" hidden>
                <label className={styles.input_label} >What are you submitting?</label>

                <div>
                <label>
                    <input onChange={(e) => {setLabel(e.target.value), next("input-bug-or-enhancement", "label-label", `Label: ${e.target.value}`, "input-page")}} name="label" type="radio" value="enhancement"></input>
                    👀 I'd like to suggest a feature
                </label>
                </div>

                <div>
                <label>
                    <input onChange={(e) => {setLabel(e.target.value), next("input-bug-or-enhancement", "label-label", `Label: ${e.target.value}`, "input-page")}} name="label" type="radio" value="bug"></input>
                    🪲 I found a bug I'd like to report
                </label>
                </div>
                

            </fieldset>


            <div id="input-page" hidden>
            <label className={styles.input_label} >
                What page is this request for?
                <select id="select-page" value={page} onChange={(e) => {setPage(e.target.value), next("input-page", "label-page", `Page: ${e.target.value}`, "issue-description")}} >
                    <option hidden>Select an option:</option>
                    <option value="https://blackswan3d.com/about/">"About Us" page</option>
                    <option value="https://blackswan3d.com/our-work/">"Our work" page</option>
                    <option value="https://blackswan3d.com/our-team/">"Our Team" page</option>
                    <option value="https://blackswan3d.com/tech/github-issues/">"GitHub Issues" page</option>
                    <option value="New page">I'm requesting a new page</option>
                    <option value="N/A">N/A</option>
                </select>
            </label>
            </div>

            

            <div id="issue-description" hidden>
            <label className={styles.input_label}>
                What feature/bug fix would you like?
                <textarea value={content} onChange={(e) => {setContent(e.target.value), checkContinue(e.target.value.length)}} wrap="hard" id={styles.desc} placeholder="Let us feed birb on the website!" autoComplete="off"/>
            </label>

            

            <button id="button-to-continue" hidden onClick={() => {next("issue-description", "description-label", `Change: ${content}`, "deadline")}}>Continue</button>
            </div>

            

            <div id="deadline" hidden>
            <label className={styles.input_label} >
                When should we get this done by?
                <input value={date} onChange={(e) => {setDate(parseDate(e.target.value)), next("deadline", "label-deadline", `Deadline: ${parseDate(e.target.value)}`, "submit")}} type="date" placeholder="Select a date:" autoComplete="off"></input>
            </label>
            </div>

            <button hidden id="submit" onClick={(e) => {sendForm(name, label, page, content, date)}}>Submit</button>

        </div>
    )
}