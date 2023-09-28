import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs';
import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app"

export async function POST( req: NextRequest ) {
    const pk = fs.readFileSync("chalubot.pem");
    let full_content = fs.readFileSync("./issue_template.md").toString();

    const OWNER_REPO = {
      owner: 'blackswan3dprinting',
      repo: 'blackswan3d.com'
    }

    const HAS_GITHUB = {
      "Carlos V.": "@calejvaldez",
      "Joseph S.": "@Electric108"
    }

    const installationOctokit = new Octokit({
        authStrategy: createAppAuth,
        auth: {
          appId: 389481,
          privateKey: pk.toString(),
          installationId: 41760647,
        },
      });

      const d = await req.json()

      let [name, label, page, content, date]: string[] = [Object.keys(HAS_GITHUB).includes(d['name']) ? HAS_GITHUB[d['name']]: d['name'], d['label'], d['page'], d['content'], d['date']]

      full_content = full_content.replace("INSERT_CONTENT", content)
      .replace("INSERT_PAGE", page)
      .replace("INSERT_DATE", date)
      .replace("INSERT_NAME", name)

      // creates the issue
      const issue = await installationOctokit.rest.issues.create({
        ...OWNER_REPO,
        title: (content.length > 50) ? `${content.substring(0, 50)}...`:content,
        body: full_content,
        labels: [label],
        assignees: ['calejvaldez']
      });

      // gets `dev` branch to get latest commit
      const branch = await installationOctokit.rest.repos.getBranch({
        ...OWNER_REPO,
        branch: 'dev'
      })

      // issue.data.id gets the issue number
      // branch.data.commit.sha gets the reference to branch off of
      await installationOctokit.rest.git.createRef({
        ...OWNER_REPO,
        ref: `refs/heads/dev-${issue.data.id}`,
        sha: branch.data.commit.sha
      })

      await installationOctokit.rest.issues.createComment({
        ...OWNER_REPO,
        issue_number: issue.data.id,
        body: "New branch `dev-" + issue.data.id + "` successfully created."
      })

      return issue.data.html_url
}