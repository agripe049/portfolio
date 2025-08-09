import styles from './Footer.module.css'

function Footer() {
    return ( 
        <div> 
            <footer>
                <div className={styles.interface}>
                    <div className={styles.flex}>
                        <p className={styles.copy}>
                            <span>Matheus Agripe</span> &copy; 2025
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    )
} 

export default Footer;