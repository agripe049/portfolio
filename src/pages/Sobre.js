import SlideBar from "../components/SlideBar";
import styles from './Sobre.module.css'
import perfil from '../img/perfil.jpeg'
import { Link } from "react-router-dom";


function Sobre() {
  return (
    <div>
      <SlideBar />
      <section className={styles.sobre}>
        <div className={styles.interface}>
          <div className={styles.flex}>
            <div className={styles.img_sobre}>
              <img src={perfil} alt="Foto de perfil" className={styles.perfil} />
            </div>
            <div className={styles.txt_sobre}>
                <h2>MUITO PRAZER, <span>SOU MATHEUS AGRIPE.</span></h2>
                <p>Olá meu nome é Matheus Agripe, sou um desenvolvedor front-end apaixonado por tecnologia e inovação.
                  Recém formado em Análise e Desenvolvimento de Sistemas, venho me dedicando diariamente aos estudos e à
                  prática, buscando evoluir evoluir como profissional e conquistar minha primeira oportunidade na área.
                  Meu objetivo é criar interfaces de usuário bonitas, intuitivas e funcionais, que proporcionem a melhor
                  experiência possível para quem as utiliza. Estou sempre aberto a novos desafios e oportunidades,
                  pronto para aprender e crescer junto com a equipe.</p>
                  <div className={styles.btn_social}>
                    <Link to="https://api.whatsapp.com/send/?phone=5544998995803&text&type=phone_number&app_absent=0"><button><i className="bi bi-whatsapp"></i></button></Link>
                    <Link to="https://www.linkedin.com/in/matheus-agripe/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"><button><i className="bi bi-linkedin"></i></button></Link>
                    <Link to="https://github.com/agripe049"><button><i className="bi bi-github"></i></button></Link>
                  </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;