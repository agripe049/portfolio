import styles from "./ConviteCasamento.module.css";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import homeConvite from "../img/homeConvite.png"
import ConfirmePresenca from "../img/ConfirmePresenca.png"
import ListaConfirmados from "../img/ListaConfirmados.png"

function ConviteCasamento() {
  return (
    <div>
      <section className={styles.convite}>
        <div className={styles.interface}>
          <h2 className={styles.titulo}><span>Convite de</span> Casamento</h2>
          <div className={styles.flex}>
            <div className={styles.txt_convite}>
              <p>Projeto desenvolvido em React para criar um convite de casamento
                moderno e funcional. A aplicação exibe informações sobre local,
                data e horário do evento, possui link para a lista de presentes
                e permite a confirmação de presença via EmailJS. Conta também
                com uma área autenticada exclusiva para os noivos acompanharem
                as confirmações em tempo real. Os dados utilizados nos prints
                são reais, com autorização dos noivos. O site não está disponível
                publicamente, a fim de evitar acessos indevidos.</p>
              <div className={styles.btn_convite}>
                <button>HTML</button>
                <button>CSS</button>
                <button>JavaScript</button>
                <button>React</button>
                <button>Firebase</button>
              </div>
              <div className={styles.btn_online}>
                <a href="https://github.com/agripe049/gerenciamento-casamento" target="_blank" rel="noopener noreferrer">
                  <button><FaGithub  className={styles.icone}/> Repositório</button>
                </a>
              </div>
              <div className={styles.voltar}>
                <Link to="/projetos">
                  <p><FaArrowLeftLong className={styles.icone} /> Voltar para projetos</p>
                </Link>
              </div>
            </div>
          </div>
          <div className={styles.home}>
            <h2>Home</h2>
          </div>
          <div className={styles.txt_img}>
              <img src={homeConvite} alt="HomeConvite" />
          </div>
          <div className={styles.home}>
            <h2>Confirmação de presença</h2>
          </div>
          <div className={styles.txt_img}>
              <img src={ConfirmePresenca} alt="HomeConvite" />
          </div>
          <div className={styles.home}>
            <h2>Área autenticada dos noivos</h2>
          </div>
          <div className={styles.txt_img}>
              <img src={ListaConfirmados} alt="HomeConvite" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default ConviteCasamento;