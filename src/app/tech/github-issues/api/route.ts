import { NextRequest, NextResponse } from 'next/server'
import * as fs from 'fs';
import { Octokit } from "octokit";
import { createAppAuth } from "@octokit/auth-app"

export async function POST( req: NextRequest ) {
    const pk = fs.readFileSync("chalubot.pem");

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

      const full_content = `> 🤖✌️ This was submitted using the [GitHub Issues employee tool](https://blackswan3d.com/tech/github-issues/)!\n\n# What feature/bug fix would you like?\n${content}\n\n# What page should this feature/bug fix be on?\n${page}\n\n# When should this get done by?\n${date}\n\n# Requested by:\n${name}`

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