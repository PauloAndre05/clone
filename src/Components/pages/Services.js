import styles from './Services.module.css'

function Services()  {
    return(
        <section className={styles.container_services}>
            <h1>SERVIES.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae nibh nisl. Cras et mauris eget lorem ultricies ferme ntum a in diam.</p>

            <div className={styles.container_article}>
                <div className={styles.article}>
                    <h3>Domain + Email</h3>
                    <p>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
                </div>
            </div>
        </section>
    )
}

export default Services
