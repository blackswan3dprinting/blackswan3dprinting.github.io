// layout.tsx
// Black Swan 3D Printing
// 
// The layout of the website
import { Header } from "./header"
import { Footer } from "./footer"
import "../styles/global.scss"

// Read the docs: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#layouts
export default function Layout( {children} ) {
    return (
        <html lang="en">
            
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
            
        </html>
    )
}