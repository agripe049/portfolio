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
                            <p>O projeto "Pot Cakes" foi desenvolvido para atender às necessidades específicas
                                de uma confeiteira no gerenciamento de seus pedidos. Na página inicial, é exibido
                                um painel com a quantidade de pedidos organizados por data de entrega, além de
                                destacar os que já estão prontos, aguardando apenas a retirada.
                                O sistema conta com uma seção dedicada aos clientes, permitindo o cadastro, edição,
                                ativação, inativação e busca por nome. Todos os campos são obrigatórios, garantindo
                                o preenchimento completo das informações.
                                Na aba de produtos, é possível cadastrar itens informando nome, peso, preço e quantidade
                                — também com validação obrigatória. Há ainda uma listagem geral dos produtos e o
                                controle de estoque.
                                Na área de vendas, o processo é simplificado: o usuário precisa apenas informar a
                                quantidade, preço, data e forma de entrega. Os demais dados são selecionados a partir
                                de registros já existentes no sistema.
                                Por fim, a seção de relatórios oferece uma visão gráfica do desempenho das vendas,
                                mostrando o total de produtos vendidos, o faturamento acumulado e os itens mais vendidos.
                                Esse projeto foi um caso de sucesso e atualmente está em uso por uma pequena empresa do
                                ramo de confeitaria, contribuindo diretamente para a organização e eficiência das suas operações diárias.</p>
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