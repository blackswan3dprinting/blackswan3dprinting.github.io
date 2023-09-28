import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs';
import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app"

export async function POST( req: NextRequest ) {
    const pk = fs.readFileSync("chalubot.pem");
    let full_content = fs.readFileSync("./issue_template.md").toString();

    const installationOctokit = new Octokit({
        authStrategy: createAppAuth,
        auth: {
          appId: 389481,
          privateKey: pk.toString(),
          installationId: 41760647,
        },
      });

      const d = await req.json()

      let [name, label, page, content, date]: string[] = [d['name'], d['label'], d['page'], d['content'], d['date']]

      if (name === 'Carlos V.') {
        name = "@calejvaldez"
      } else if (name === 'Joseph S.') {
        name = "@Electric108"
      }

      full_content = full_content.replace("INSERT_CONTENT", content)
      full_content = full_content.replace("INSERT_PAGE", page)
      full_content = full_content.replace("INSERT_DATE", date)
      full_content = full_content.replace("INSERT_NAME", name)

      const res = await installationOctokit.rest.issues.create({
        owner: 'blackswan3dprinting',
        repo: 'blackswan3d.com',
        title: (content.length > 50) ? `${content.substring(0, 50)}...`:content,
        body: full_content,
        labels: [label],
        assignees: ['calejvaldez']
      });

      return res.data.html_url
}