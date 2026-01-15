import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import styles from './ControleFinanceiro.module.css'
import loginControle from '../img/loginControle.png'
import Controle from '../img/Controle.png'


function ControleFinanceiro() {
    return (
        <div>
            <section className={styles.controleFinanceiro}>
                <div className={styles.interface}>
                    <h2 className={styles.titulo}><span>Controle</span> - Financeiro</h2>
                    <div className={styles.flex}>
                        <div className={styles.txt_controleFinanceiro}>
                            <p>Sistema de Controle Financeiro desenvolvido em React e Firebase,
                                no modelo SaaS. Permite gerenciar entradas e saídas financeiras
                                com CRUD completo, autenticação de usuários, dados isolados por
                                usuário, filtro por data e cálculo automático de receitas, despesas
                                e saldo. Aplicação responsiva, com foco no uso de React Hooks, integração
                                com Firestore e boas práticas de desenvolvimento front-end.</p>
                            <div className={styles.btn_controleFinanceiro}>
                                <button>HTML</button>
                                <button>CSS</button>
                                <button>JavaScript</button>
                                <button>React</button>
                                <button>Firebase</button>
                            </div>
                            <div className={styles.btn_online}>
                                <a href="https://controle-financeiro-indol-ten.vercel.app" target="_blank" rel="noopener noreferrer">
                                    <button><CiGlobe /> Projeto Online</button>
                                </a>
                                <a href="https://github.com/agripe049/controle-financeiro" target="_blank" rel="noopener noreferrer">
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
                    <div className={styles.txt_img}>
                        <img src={loginControle} alt="Login" />
                    </div>
                    <div className={styles.login}>
                        <h2>Home</h2>
                    </div>
                    <div className={styles.txt_img}>
                        <img src={Controle} alt="Home" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ControleFinanceiro;