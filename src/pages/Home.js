import styles from './Home.module.css'
import { Link } from 'react-router-dom';
import perfil from '../img/perfil.jpeg';
import '../index.css'
import Especialidades from './Especialidades'
import Sobre from './Sobre';
import Projetos from './Projetos';
import Contato from '../components/Contato';

// ola

function Home() {
  return (
    <div>
 
      <section className={styles.topo_do_site}>
        <div className={styles.interface}>
          <div className={styles.flex}>
            <div className={styles.txt_topo_site}>
              <h1>Olá, meu nome é <span className={styles.nome}>Matheus Agripe</span></h1>
              <p>Sou desenvolvedor front-end, graduado como tecnólogo em Análise e Desenvolvimento de Sistemas,
                com especialidades em React, JavaScript, HTML, CSS e Firebase.
                Estou em busca da minha primeira oportunidade na área de tecnologia.
                Apesar de ainda não ter experiência profissional na área, sou extremamente dedicado,
                comprometido com resultados e movido pela vontade constante de aprender e evoluir.
                Vamos conversar?
              </p>

              <div className={styles.btn_contato}>
                <Link to="/contato">
                  <button>
                    Entre em contato
                  </button>
                </Link>
              </div>
              <div className={styles.btn_social}>
                <a href="https://api.whatsapp.com/send/?phone=5544998995803&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-whatsapp"></i></button>
                </a>
                <a href="https://www.linkedin.com/in/matheus-agripe/" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-linkedin"></i></button>
                </a>
                <a href="https://github.com/agripe049" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-github"></i></button>
                </a>
              </div>
            </div>
            <div className={styles.img_topo_site}>
              <img src={perfil} alt="Foto de perfil" className={styles.perfil} />
            </div>
          </div>
        </div>
      </section>
      <Especialidades />
      <Sobre />
      <Projetos />
      <Contato />
    </div>
  );
}

export default Home;