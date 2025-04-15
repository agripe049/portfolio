import SlideBar from "../components/SlideBar";
import styles from "./Especialidades.module.css"

function Contato() {
    return (
      <div>
        <SlideBar />
        <section className={styles.especialidades}>
            <div className="interface">
              <h2 className={styles.titulo}>MINHAS <span>ESPECIALIDADES.</span></h2>
                <div className={styles.flex}>
                    <div className={styles.especialidades_box}>
                        <i className="bi bi-code-square"></i>
                        <h3>Website</h3>
                        <p>Desenvolvimento de sites modernos e responsivos com foco em performance e experiência do usuário.</p>
                    </div>
                    <div className={styles.especialidades_box}>
                        <i className="bi bi-cart"></i>
                        <h3>Loja online</h3>
                        <p>Desenvolvimento de sites modernos e responsivos com foco em performance e experiência do usuário.</p>
                    </div>
                    <div className={styles.especialidades_box}>
                        <i className="bi bi-substack"></i>
                        <h3>Blog</h3>
                        <p>Desenvolvimento de sites modernos e responsivos com foco em performance e experiência do usuário.</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Contato;