import styles from './Projetos.module.css';
import { Link } from 'react-router-dom';
import pot from '../img/pot.png';
import dashh from '../img/dashh.png';
import HomeCinee from '../img/HomeCinee.png'
import convitee from '../img/convitee.png';
import control from '../img/control.png'
import cep from '../img/cep.png'

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
            <Link to="/cinepot">
              <img src={HomeCinee} alt="Cine Pot" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Cine Pot</h2>
            <p>Aplicação em React focada no consumo da API do TMDB para listagem e busca de filmes.</p>

            <div className={styles.projectTech}>
              <button>React</button>
              <button>API REST</button>
              <button>Vercel</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/cinepot">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>

        {/* POT CAKES */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/potcakes">
              <img src={pot} alt="Pot Cakes" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Pot Cakes Confeitaria</h2>
            <p>Sistema desenvolvido para gerenciamento de confeitaria.</p>

            <div className={styles.projectTech}>
              <button>React</button>
              <button>Firebase</button>
              <button>Vercel</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/potcakes">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>

        {/* Consulta CEP */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/">
              <img src={cep} alt="Via Cep" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Consulta CEP</h2>
            <p>Aplicação focada no consumo da api ViaCEP.</p>

            <div className={styles.projectTech}>
              <button>React</button>
              <button>API REST (ViaCEP)</button>
              <button>Vercel</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>

        {/* CONVITE */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/conviteCasamento">
              <img src={convitee} alt="Convite de Casamento" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Convite de casamento</h2>
            <p>Sistema de convite de casamento.</p>

            <div className={styles.projectTech}>
              <button>React</button>
              <button>Firebase</button>
              <button>Vercel</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/conviteCasamento">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>

        {/* CONTROLE FINANCEIRO */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/controleFinanceiro">
              <img src={control} alt="Gerenciador de Orçamentos" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Controle Financeiro</h2>
            <p>
              Sistema SaaS desenvolvido para Controle Financeiro.
            </p>

            <div className={styles.projectTech}>
              <button>React</button>
              <button>Firebase</button>
              <button>Vercel</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/controleFinanceiro">
                <p>Ver projeto</p>
              </Link>
            </div>
          </div>
        </div>

        {/* GERENCIAMENTO */}
        <div className={styles.project}>
          <div className={styles.projectImg}>
            <Link to="/gerenciamentoCasamento">
              <img src={dashh} alt="Gerenciador de Orçamentos" />
            </Link>
          </div>

          <div className={styles.projectText}>
            <h2>Gerenciador de orçamentos</h2>
            <p>
              Sistema desenvolvido para gerenciamento de orçamentos para
              casamentos.
            </p>

            <div className={styles.projectTech}>
              <button>React</button>
              <button>Firebase</button>
              <button>Vercel</button>
            </div>

            <div className={styles.btn_verprojeto}>
              <Link to="/gerenciamentoCasamento">
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
