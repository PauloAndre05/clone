
import Container from '../layout/Container'
import styles from './About.module.css'
import i22 from '../../img/22.png'
import { Button } from '../layout/Button'

function About()  {
    return(
        <div className={styles.sessao_about}>
            <h1>ABOUT US.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras et mauris eget lorem ultricies ferme ntum a in diam.</p>
            
            <Container>
                <div className={styles.sessao2_about}>
                    <img src={i22} alt="image"/>
                    <div>
                        <h2>Everything You Need</h2>
                        <p>Whether you need simple pages, striking galleries, a professional blog, or an online store, it's all included with your Squarespace website. Best of all, everything is mobile-ready right from the start.</p>
                        <Button text="View More"/>
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default About
