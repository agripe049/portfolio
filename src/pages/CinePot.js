import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from './CinePot.module.css'

function CinePot() {
  return (
    <div>
      <section className={styles.cinepot}>
        <div className={styles.interface}>
          <h2 className={styles.titulo}><span>Cine Pot</span> - Filmes</h2>
          <div className={styles.flex}>
            <div className={styles.txt_cinepot}>
              <p>O projeto Pot Cakes foi desenvolvido para auxiliar uma
                confeiteira no gerenciamento de pedidos e operações
                do negócio. A aplicação apresenta um painel inicial
                com os pedidos organizados por data de entrega,</p>
              <div className={styles.btn_cinepot}>
                <button>React</button>
                <button>JavaScript</button>
                <button>CSS</button>
                <button>API REST</button>
              </div>
              <div className={styles.btn_online}>
                <a href="https://bolo-theta.vercel.app" target="_blank" rel="noopener noreferrer">
                  <button><CiGlobe /> Projeto Online</button>
                </a>
                <a href="https://github.com/agripe049/bolo" target="_blank" rel="noopener noreferrer">
                  <button><FaGithub /> Repositório</button>
                </a>
              </div>
              <div className={styles.voltar}>
                <Link to="/projetos">
                  <p><FaArrowLeftLong className={styles.icone} /> Voltar para projetos</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.login}>
            <h2>Login</h2>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CinePot;