import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs';
import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app"

export async function POST( req: NextRequest ): Promise<NextResponse> {
    const pk = fs.readFileSync("chalubot.pem");
    let full_content = fs.readFileSync("./app/tech/github-issues/api/issue_template.md").toString();

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

    if (issue.status !== 201) {
      // Issue failed to be created
      return new NextResponse(JSON.stringify({"error": "issue"}));
    }

    const ISSUE_NUMBER = issue.data.number;

    // gets `dev` branch to get latest commit
    const branch = await installationOctokit.rest.repos.getBranch({
      ...OWNER_REPO,
      branch: 'dev'
    })

    if (branch.status !== 200) {
      // failed to get branch
      return new NextResponse(JSON.stringify({"error": "get branch"}));
    }

    // issue.data.id gets the issue number
    // branch.data.commit.sha gets the reference to branch off of
    const new_branch = await installationOctokit.rest.git.createRef({
      ...OWNER_REPO,
      ref: `refs/heads/dev-${ISSUE_NUMBER}`,
      sha: branch.data.commit.sha
    })

    if (new_branch.status !== 201) {
      // failed to make a new branch
      return new NextResponse(JSON.stringify({"error": "new branch"}));
    }

    const comment = await installationOctokit.rest.issues.createComment({
      ...OWNER_REPO,
      issue_number: ISSUE_NUMBER,
      body: "New branch `dev-" + ISSUE_NUMBER + "` successfully created."
    })

    if (comment.status !== 201) {
      // failed to create comment
      return new NextResponse(JSON.stringify({"error": "comment"}));
    }

    return new NextResponse(JSON.stringify({"url": issue.data.html_url}))
}