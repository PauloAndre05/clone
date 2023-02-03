import { Link } from "react-router-dom"
import logo from '../../img/blacklogo.png'
import Container from "./Container"
import styles from './NavBar.module.css'
import { NavLink } from "react-router-dom"

function NavBar() {
    return(  
    <Container>
        <nav className={styles.nav_bar}>
          
            <div><img src={logo} alt=""/></div>
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <NavLink to="/about">About</NavLink> </li>
                <li> <Link to="/services">Services</Link> </li>
                <li> <Link to="/team">Team</Link> </li>
                <li> <Link to="/portifolio">Portifolio</Link> </li>
                <li> <Link to="/contacto">Conatcto</Link> </li>
                <li> <Link to="/testimonial">Testimonial</Link> </li>
            </ul>
            
        </nav>
    </Container>
    )
}

export default NavBar   
