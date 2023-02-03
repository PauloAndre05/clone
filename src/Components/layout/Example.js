import { Button } from './Button'
import styles from './Example.module.css'


function Example() {
    return(
        <section className={styles.example}>
            <div>
                <h1>OUR EXAMPLE</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras et mauris eget lorem ultricies ferme ntum a in diam.</p>
            </div>

            <div className={styles.container_imgs}>
                <div className={styles.imgs}></div>
                <div className={styles.imgs}></div>
                <div className={styles.imgs}></div>
            </div>

            <div className={styles.container_quote}>
                <div className={styles.quote}>
                    <h1>Get a new way for growing your business!</h1>
                    <Button text="Get a Quote"/>
                </div>
            </div>
        </section>
    )
}

export {Example}