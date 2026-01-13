import styles from './PotCakes.module.css'
import { CiGlobe } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";
import login from '../img/login.png'
import home from '../img/home.png'
import relatorios from '../img/relatorios.png'

function PotCakes() { 
    return (
        <div>
            <section className={styles.potcakes}>
                <div className={styles.interface}>
                    <h2 className={styles.titulo}><span>Pot Cakes</span> - Confeitaria</h2>
                    <div className={styles.flex}>
                        <div className={styles.txt_potcakes}>
                            <p>O projeto Pot Cakes foi desenvolvido para auxiliar uma
                                confeiteira no gerenciamento de pedidos e operações
                                do negócio. A aplicação apresenta um painel inicial
                                com os pedidos organizados por data de entrega,
                                destacando aqueles já prontos para retirada.
                                O sistema permite o cadastro e gerenciamento de
                                clientes e produtos, com validação obrigatória
                                dos dados, além do controle de estoque.
                                O processo de vendas é simples e integrado aos
                                registros existentes. A aplicação também conta
                                com relatórios gráficos que exibem o
                                desempenho das vendas, faturamento e
                                produtos mais vendidos.</p>
                            <div className={styles.btn_potcakes}>
                                <button>HTML</button>
                                <button>CSS</button>
                                <button>JavaScript</button>
                                <button>React</button>
                                <button>Firebase</button>
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
                    <div className={styles.txt_img}>
                        <img src={login} alt="Login" />
                    </div>
                    <div className={styles.login}>
                        <h2>Home</h2>
                    </div>
                    <div className={styles.txt_img}>
                        <img src={home} alt="Home" />
                    </div>
                    <div className={styles.login}>
                        <h2>Relatórios</h2>
                    </div>
                    <div className={styles.txt_img}>
                        <img src={relatorios} alt="Relatórios" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default PotCakes;