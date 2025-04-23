import styles from './Projetos.module.css'
import bolo from '../img/bolo.png';

function Projetos() {
  return ( 
    <div>
      
      <section className={styles.portfolio}>
        <div className={styles.interface}>
          <h2 className={styles.titulo}>MEU <span>PORTFÓLIO.</span></h2>
          <div className={styles.flex}>
            <div className={styles.img_port} style={{ backgroundImage: `url(${bolo})` }}>
                <div className={styles.overlay}>Projeto 1</div>
            </div>
            <div className={styles.img_port} style={{ backgroundImage: `url(${bolo})` }}>
                <div className={styles.overlay}>Projeto 2</div>
            </div>
            <div className={styles.img_port} style={{ backgroundImage: `url(${bolo})` }}>
                <div className={styles.overlay}>Projeto 3</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Projetos;