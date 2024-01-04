// page.tsx
// Black Swan 3D Printing
// 
// We used to have a page on https://blackswan3d.com/tech/github-issues/.
// We don't maintain it anymore. Instead, we redirect to GitHub Issues.
import { redirect } from "next/navigation";

export default function Index() {
    redirect("https://github.com/blackswan3dprinting/blackswan3d.com/issues/new/choose")
}