// page.tsx
// Black Swan 3D Printing
// 
// We used to have a page on https://blackswan3d.com/our-team/.
// We no longer maintain it. It redirects to the main page.
import { redirect } from "next/navigation";

export default function Index() {
    redirect("/")
}