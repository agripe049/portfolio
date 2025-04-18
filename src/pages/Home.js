import styles from './Home.module.css'
import { Link } from 'react-router-dom';
import perfil from '../img/perfil.jpeg';
import '../index.css'
import Especialidades from './Especialidades'
import Sobre from './Sobre';
import Projetos from './Projetos';
import Contato from '../components/Contato';



function Home() {
  return ( 
    <div>
      
      <section className={styles.topo_do_site}>
        <div className={styles.interface}>
          <div className={styles.flex}>
            <div className={styles.txt_topo_site}>
              <h1>Olá meu nome é Matheus Agripe<span>.</span></h1>
              <p>Olá meu nome é Matheus Agripe, sou um desenvolvedor front-end apaixonado por tecnologia e inovação.<br></br>
                Recém formado em Análise e Desenvolvimento de Sistemas, venho me dedicando diariamente aos estudos e à<br></br>
                prática, buscando evoluir evoluir como profissional e conquistar minha primeira oportunidade na área.<br></br>
                Meu objetivo é criar interfaces de usuário bonitas, intuitivas e funcionais, que proporcionem a melhor<br></br>
                experiência possível para quem as utiliza. Estou sempre aberto a novos desafios e oportunidades,<br></br>
                pronto para aprender e crescer junto com a equipe.</p>

              <div className={styles.btn_contato}>
                <Link to="/contato">
                  <button>
                    Entre em contato
                  </button>
                </Link>
              </div>
              <div className={styles.btn_social}>
                <Link to="https://api.whatsapp.com/send/?phone=5544998995803&text&type=phone_number&app_absent=0"><button><i className="bi bi-whatsapp"></i></button></Link>
                <Link to="https://www.linkedin.com/in/matheus-agripe/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><button><i className="bi bi-linkedin"></i></button></Link>
                <Link to="https://github.com/agripe049"><button><i className="bi bi-github"></i></button></Link>
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