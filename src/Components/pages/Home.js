import {Banner} from "../layout/Banner"
import About from "./About"
import {Example} from "../layout/Example"
import Services from "./Services"

function Home() {
    return(
        <>
            <Banner/>   
            <About />
            <Example/>
            <Services/> 
        </>
    )
}

export default Home
