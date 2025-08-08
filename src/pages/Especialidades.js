import styles from "./Especialidades.module.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";

function Contato() {
    return (
      <div> 
        <section className={styles.especialidades}>
            <div className={styles.interface}>
              <h2 className={styles.titulo}>MINHAS <span>ESPECIALIDADES.</span></h2>
                <div className={styles.flex}>
                    <div className={styles.especialidades_box}>
                        <i><FaHtml5 /></i>
                        <h3>HTML</h3>
                        <p>3 anos de experiência</p>
                    </div>
                    <div className={styles.especialidades_box}>
                        <i><FaCss3Alt /></i>
                        <h3>CSS</h3>
                        <p>3 anos de experiência</p>
                    </div>
                    <div className={styles.especialidades_box}>
                        <i><IoLogoJavascript /></i>
                        <h3>JavaScript</h3>
                        <p>3 anos de experiência</p>
                    </div>
                    <div className={styles.especialidades_box}>
                        <i><FaReact /></i>
                        <h3>React</h3>
                        <p>2 anos de experiência</p>
                    </div>
                    <div className={styles.especialidades_box}>
                        <i><IoLogoFirebase /></i>
                        <h3>Firebase</h3>
                        <p>2 anos de experiência</p>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
  
  export default Contato;