import { Header } from "./header"
import { Footer } from "./footer"
import "../styles/global.scss"

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