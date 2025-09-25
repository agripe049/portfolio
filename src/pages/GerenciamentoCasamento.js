import styles from './GerenciamentoCasamento.module.css'
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import dash from '../img/dash.png'

 
function GerenciamentoCasamento() {
    return (
        <div>
            <section className={styles.gerenciamento}>
                <div className={styles.interface}>
                    <h2 className={styles.titulo}><span>Gerenciamento</span> - Orçamentos</h2>
                    <div className={styles.flex}>
                        <div className={styles.txt_gerenciamento}>
                            <p>Este sistema foi desenvolvido com o objetivo de facilitar o controle
                               financeiro de eventos, com foco especial em casamentos. A plataforma
                               permite que os usuários registrem e acompanhem despesas e receitas
                               de forma simples e intuitiva, possibilitando uma melhor organização
                               do orçamento total.
                               Embora tenha sido pensado para casamentos, o sistema é flexível e 
                               pode ser adaptado a outros tipos de eventos e projetos que exijam 
                               controle de gastos.
                               Principais funcionalidades são: Cadastro e gerenciamento de despesas
                               e receitas, visualização clara do saldo disponível, Ideal para casais,
                               organizadores de eventos ou qualquer pessoa que deseje controlar 
                               melhor seu orçamento.</p>
                            <div className={styles.btn_gerenciamento}>
                                <button>HTML</button>
                                <button>CSS</button>
                                <button>JavaScript</button>
                                <button>React</button>
                                <button>Firebase</button>
                            </div>
                            <div className={styles.btn_online}>
                                <a href="https://gerenciamento-casamento.vercel.app/" target="_blank" rel="noopener noreferrer">
                                    <button><CiGlobe /> Projeto Online</button>
                                </a>
                                <a href="https://github.com/agripe049/gerenciamento-casamento" target="_blank" rel="noopener noreferrer">
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
                    <div className={styles.dash}>
                        <h2>Dash</h2>
                    </div>
                    <div className={styles.txt_img}>
                        <img src={dash} alt="Dash" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default GerenciamentoCasamento;