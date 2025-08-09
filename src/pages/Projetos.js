import styles from './Projetos.module.css'
import login from '../img/login.png';
import { Link } from 'react-router-dom';
import dash from '../img/dash.png'

function Projetos() {
  return (
    <div>
      <section className={styles.portfolio}>
        <div className={styles.interface}>
          <h2 className={styles.titulo}>MEUS <span>PROJETOS.</span></h2>
          <div className={styles.flex}>
            <div className={styles.img_portfolio}>
              <Link to="/potcakes">
                <img src={login} alt="Login" className={styles.login} />
              </Link>
            </div>
            <div className={styles.txt_portfolio}>
              <h2>Pot Cakes Confeitaria</h2>
              <p>Sistema desenvolvido para gerenciamento de confeitaria.</p>
              <div className={styles.btn_portfolio}>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Firebase</button>
              </div>
              <div className={styles.btn_verprojeto}>
                <Link to="/potcakes">
                  <button>Ver projeto</button>
                </Link>
              </div>
            </div>
          </div>

 
          {/*----------------------------------------------------------------------------------------------------------------------*/}


          <div className={styles.flex}>
            <div className={styles.img_gerenciamento}>
              <Link to="/gerenciamentoCasamento">
                <img src={dash} alt="Dash" className={styles.login} />
              </Link>
            </div>
            <div className={styles.txt_gerenciamento}>
              <h2>Gerenciamento de orçamentos</h2>
              <p>Sistema desenvolvido para gerenciamento de orçamentos para casamentos</p>
              <div className={styles.btn_gerenciamento}>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Firebase</button>
              </div>
              <div className={styles.btn_verprojeto}>
                <Link to="/gerenciamentoCasamento">
                  <button>Ver projeto</button>
                </Link>
              </div>
            </div>
          </div>
        </div> 
      </section>
    </div>
  );
}

export default Projetos;