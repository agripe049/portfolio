import styles from './Projetos.module.css';
import { Link } from 'react-router-dom'; 
import login from '../img/login.png';
import dash from '../img/dash.png';
import HomeCine from '../img/HomeCine.png'
import casamentoHome from '../img/casamentoHome.png';

function Projetos() {
  return (
    <section className={styles.portfolio}>
      <div className={styles.interface}>
        <h2 className={styles.titulo}>
          MEUS <span>PROJETOS.</span>
        </h2>

        {/* Cine Pot */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/">
              <img src={HomeCine} alt="Pot Cakes" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Cine Pot</h2>
            <p>Aplicação em React focada no consumo da API do TMDB para listagem e busca de filmes.</p>

            <div className={styles.projectTech}>
              <button>React</button>
              <button>JavaScript</button>
              <button>CSS</button>
              <button>API REST</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>

        {/* POT CAKES */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/potcakes">
              <img src={login} alt="Pot Cakes" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Pot Cakes Confeitaria</h2>
            <p>Sistema desenvolvido para gerenciamento de confeitaria.</p>

            <div className={styles.projectTech}>
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>React</button>
              <button>Firebase</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/potcakes">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>

        {/* GERENCIAMENTO */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/gerenciamentoCasamento">
              <img src={dash} alt="Gerenciador de Orçamentos" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Gerenciador de orçamentos</h2>
            <p>
              Sistema desenvolvido para gerenciamento de orçamentos para
              casamentos.
            </p>

            <div className={styles.projectTech}>
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>React</button>
              <button>Firebase</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/gerenciamentoCasamento">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>
 
        {/* CONVITE */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/conviteCasamento">
              <img src={casamentoHome} alt="Convite de Casamento" />
            </Link>
          </div>
 
          <div className={styles.projectText}>
            <h2>Convite de casamento</h2>
            <p>Sistema de convite de casamento.</p>

            <div className={styles.projectTech}>
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>React</button>
              <button>Firebase</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/conviteCasamento">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projetos;
