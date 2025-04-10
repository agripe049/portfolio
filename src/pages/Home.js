import SlideBar from '../components/SlideBar';
import perfil from '../img/perfil.jpeg'
import styles from './Home.module.css'


function Home() {
  return (
    <div>
      <SlideBar />
      <h2>Olá, meu nome é</h2>
      <h1>Matheus Agripe</h1>

      <h3>Olá meu nome é Matheus Agripe, sou um desenvolvedor front-end apaixonado por tecnologia e inovação.<br></br>
        Recém formado em Análise e Desenvolvimento de Sistemas, venho me dedicando diariamente aos estudos e à<br></br>
        prática, buscando evoluir evoluir como profissional e conquistar minha primeira oportunidade na área.<br></br>
        Meu objetivo é criar interfaces de usuário bonitas, intuitivas e funcionais, que proporcionem a melhor<br></br>
        experiência possível para quem as utiliza. Estou sempre aberto a novos desafios e oportunidades,<br></br>
        pronto para aprender e crescer junto com a equipe.
      </h3>


      <img src={perfil} alt="Foto de capa" className={styles.perfil}/>
    </div>
  );
}

export default Home;