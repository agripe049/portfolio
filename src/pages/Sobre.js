import styles from './Sobre.module.css'
import perfil from '../img/perfil.jpeg'
import Curriculo from '../img/curriculo.pdf'

function Sobre() {

  const handleDownload = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    const link = document.createElement('a');
    link.href = Curriculo;
    link.setAttribute('download', 'Matheus_Agripe.pdf'); // Nome do arquivo ao ser baixado
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link); // Remove o link após o download
  };

  return (
    <div>

      <section className={styles.sobre}>
        <div className={styles.interface}>
          <div className={styles.flex}>
            <div className={styles.img_sobre}>
              <img src={perfil} alt="Foto de perfil" className={styles.perfil} />
            </div>
            <div className={styles.txt_sobre}>
              <h2>MUITO PRAZER, <span>SOU MATHEUS AGRIPE.</span></h2>
              <div className={styles.img_sobre_mobile}>
                <img src={perfil} alt="Foto de perfil" className={styles.perfil} />
              </div>
              <p>Sou desenvolvedor front-end com foco em React.js, JavaScript, HTML,
                CSS e Firebase, com conhecimentos também em Node.js. Tenho experiência
                no desenvolvimento de aplicações completas, trabalhando com consumo de APIs,
                autenticação de usuários, gerenciamento de dados e construção de
                interfaces responsivas. Venho desenvolvendo projetos como sistemas
                de controle financeiro, aplicações com autenticação, consumo de
                APIs REST, sistema de gerenciamento e soluções personalizadas,
                como um convite de casamento interativo, sempre com foco em
                organização, usabilidade e resolução de problemas reais. Gosto
                de transformar ideias em aplicações funcionais que saem do papel
                e fazem diferença no dia a dia, e estou constantemente buscando
                evoluir tecnicamente e enfrentar novos desafios na área de
                desenvolvimento front-end.</p>

              <div className={styles.btn_curriculo}>
                <button onClick={handleDownload}>Baixar CV</button>
              </div>

              <div className={styles.btn_social}>
                <a href="https://api.whatsapp.com/send/?phone=5544998995803&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-whatsapp"></i></button>
                </a>
                <a href="https://www.linkedin.com/in/matheus-agripe/" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-linkedin"></i></button>
                </a>
                <a href="https://github.com/agripe049" target="_blank" rel="noopener noreferrer">
                  <button><i className="bi bi-github"></i></button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;