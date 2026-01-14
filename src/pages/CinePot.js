import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import HomeCine from '../img/HomeCine.png'
import Pesquisa from '../img/Pesquisa.png'
import Detalhes from '../img/Detalhes.png'
import styles from './CinePot.module.css'

function CinePot() {
  return (
    <div>
      <section className={styles.cinepot}>
        <div className={styles.interface}>
          <h2 className={styles.titulo}><span>Cine Pot</span> - Filmes</h2>
          <div className={styles.flex}>
            <div className={styles.txt_cinepot}>
              <p>Cine Pot é uma aplicação desenvolvida em React com
                foco no consumo de API REST, utilizando a TMDB como
                fonte de dados. O sistema permite listar filmes
                populares, realizar buscas por nome e acessar
                uma página de detalhes com informações dinâmicas
                dos filmes. O projeto aplica conceitos essenciais
                do React, como componentização, useState, useEffect
                e rotas dinâmicas com React Router, além de
                trabalhar com requisições assíncronas e boas
                práticas na organização do código. O layout
                é simples, pois o foco esteve na integração
                com a API e no fluxo de dados da aplicação.</p>
              <div className={styles.btn_cinepot}>
                <button>React</button>
                <button>JavaScript</button>
                <button>CSS</button>
                <button>API REST</button>
              </div>
              <div className={styles.btn_online}>
                <a href="https://api-filmes.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button><CiGlobe /> Projeto Online</button>
                </a>
                <a href="https://github.com/agripe049/api-filmes" target="_blank" rel="noopener noreferrer">
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
            <h2>Home</h2>
          </div>
          <div className={styles.txt_img}>
            <img src={HomeCine} alt="Home" />
          </div>
          <div className={styles.login}>
            <h2>Pesquisa</h2>
          </div>
          <div className={styles.txt_img}>
            <img src={Pesquisa} alt="Pesquisa" />
          </div>
          <div className={styles.login}>
            <h2>Página de detalhes</h2>
          </div>
          <div className={styles.txt_img}>
            <img src={Detalhes} alt="Detalhes" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default CinePot;