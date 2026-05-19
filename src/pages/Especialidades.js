import styles from "./Especialidades.module.css"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { IoLogoFirebase } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

function Especialidades() {

    const calcularExperiencia = (anoInicio) => {
        const anoAtual = new Date().getFullYear();
        const anos = anoAtual - anoInicio;
        return `${anos} ${anos === 1 ? "ano" : "anos"} de experiência`;
    };

    const tecnologias = [
        { nome: "HTML", icone: <FaHtml5 />, anoInicio: 2022 },
        { nome: "CSS", icone: <FaCss3Alt />, anoInicio: 2022 },
        { nome: "JavaScript", icone: <IoLogoJavascript />, anoInicio: 2022 },
        { nome: "React", icone: <FaReact />, anoInicio: 2023 },
        { nome: "Firebase", icone: <IoLogoFirebase />, anoInicio: 2023 },
        { nome: "Node.js", icone: <FaNodeJs />, anoInicio: 2024 },
        { nome: "MySQL", icone: <DiMysql />, anoInicio: 2025 }
    ];


    return (
        <div>
            <section className={styles.especialidades}>
                <div className={styles.interface}>
                    <h2 className={styles.titulo}>MINHAS <span>ESPECIALIDADES.</span></h2>
                    <div className={styles.flex}>
                        {tecnologias.map((tech, index) => (
                            <div key={index} className={styles.especialidades_box}>
                                <i>{tech.icone}</i>
                                <h3>{tech.nome}</h3>
                                <p>{calcularExperiencia(tech.anoInicio)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Especialidades;