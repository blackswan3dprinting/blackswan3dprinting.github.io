import { Header } from "./header"
import { Footer } from "./footer"
import "../styles/global.scss"

export default function Layout( {children} ) {
    return <div>

        <Header/>
        {children}
        <Footer/>

        </div>
}