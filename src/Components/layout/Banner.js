import styles from './Banner.module.css'
import { Button } from './Button'
import Container from './Container'

function Banner() {
    return( 
        <section className={styles.container_banner}>
            <Container>

                <div >
                    <h1> THE GREAT AIM OF EDUCATION IS NOT KNOWLEDGE BUT ACTION. </h1>
                    <p>Education not only broadens the mind but adds the most important component for critical thought, depth.</p>
                    <Button text="Create Your Site"/>
                </div>

            </Container>
        </section>
    )
}

export {Banner}