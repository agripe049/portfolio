import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import React from 'react'
import styles from './ConsultaCep.module.css'
import cep from '../img/cep.png'

function ConsultaCep() {
  return (
    <div>
      <section className={styles.consultaCep}>
        <div className={styles.interface}>
          <h2 className={styles.titulo}><span>Consulta</span> - CEP</h2>
          <div className={styles.flex}>
            <div className={styles.txt_consultaCep}>
              <p>Aplicação responsiva em React voltada para a busca e
                validação automatizada de endereços através da integração
                com a API REST ViaCEP. O projeto destaca o domínio em
                requisições assíncronas assíncronas, manipulação avançada
                de estados com React Hooks e tratamento de erros de
                ponta a ponta, simulando um cenário real de formulário
                corporativo de cadastro.</p>
              <div className={styles.btn_consultaCep}>
                <button>React</button>
                <button>API REST (ViaCEP)</button>
                <button>Vercel</button>
              </div>
              <div className={styles.btn_online}>
                <a href="https://consulta-cep-orcin-six.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <button><CiGlobe /> Projeto Online</button>
                </a>
                <a href="https://github.com/agripe049/consultaCep" target="_blank" rel="noopener noreferrer">
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
            <img src={cep} alt="Home" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConsultaCep;