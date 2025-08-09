import styles from './Sobre.module.css'
import perfil from '../img/perfil.jpeg'
import curriculo from '../img/curriculo.pdf'

function Sobre() {

  const handleDownload = (e) => {
    e.preventDefault(); // Previne o comportamento padrão do link
    const link = document.createElement('a');
    link.href = curriculo;
    link.setAttribute('download', 'curriculo.pdf'); // Nome do arquivo ao ser baixado
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
              <p>Sou desenvolvedor front-end com foco em React.js, JavaScript, HTML, CSS e Firebase.
                Recém-formado em Análise e Desenvolvimento de Sistemas, já coloquei em prática meus
                conhecimentos ao desenvolver, junto a dois colegas, um sistema de gerenciamento
                para uma confeitaria como projeto de TCC. O sistema foi tão bem-sucedido que hoje
                está em uso real por uma pequena empresa, contribuindo diretamente para a organização
                e eficiência do negócio. Gosto de criar soluções que saem do papel e fazem a diferença
                na vida real e estou sempre em busca do próximo desafio.</p>

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