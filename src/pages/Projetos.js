import styles from './Projetos.module.css'
import home from '../img/home.png';
import { Link } from 'react-router-dom';

function Projetos() {
  return (  
    <div> 
      <section className={styles.portfolio}>
          <div className={styles.interface}>
            <h2 className={styles.titulo}>MEU <span>PORTFÓLIO.</span></h2>
            <div className={styles.flex}>
              <div className={styles.img_portfolio}>
                <Link to="/potcakes">
                  <img src={home} alt="Home" className={styles.home} />
                </Link>
              </div>
              <div className={styles.txt_portfolio}>
                  <h2>Pot Cakes Confeitaria</h2>
                  <p>Sistema desenvolvido para gerenciamento de confeitaria.</p>
                  <div className={styles.btn_portfolio}>
                      <button>HTML</button>
                      <button>CSS</button>
                      <button>JavaScript</button>
                      <button>React.js</button>
                      <button>Firebase</button>
                  </div>
                  <div className={styles.btn_verprojeto}>
                      <Link to="/potcakes">
                          <button>Ver projeto</button>
                      </Link>
                  </div>
              </div>
            </div>

            <div className={styles.flex}>
              <div className={styles.img_portfolio}>
                <img src={home} alt="Home" className={styles.home} />
              </div>
              <div className={styles.txt_portfolio}>
                  <h2>Pot Cakes Confeitaria</h2>
                  <p>Sistema desenvolvido para gerenciamento de confeitaria.</p>
                  <div className={styles.btn_portfolio}>
                      <button>HTML</button>
                      <button>CSS</button>
                      <button>JavaScript</button>
                      <button>React.js</button>
                      <button>Firebase</button>
                  </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}

export default Projetos;