import styles from "./MenuMobile.module.css"
import { useState } from "react";
import { Link } from "react-router-dom";

function MenuMobile() {
    const [menuAberto, setMenuAberto] = useState(false);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
    };

    const fecharMenu = () => {
        setMenuAberto(false);
    };


    return (
        <div>
            <div className={styles.menuToggle} onClick={toggleMenu}>
                {menuAberto ? (
                    <span className={styles.btnFechar}>x</span>
                ) : (
                    <div className={styles.hamburguer}>
                        <span className={styles.linha}></span>
                        <span className={styles.linha}></span>
                        <span className={styles.linha}></span>
                    </div>
                )}
            </div>

            <div className={`${styles.menuLateral} ${menuAberto ? styles.ativo : ""}`}>
                <ul>
                    <li>
                        <Link to="/" onClick={fecharMenu} className={styles.menuLink}>Home</Link>
                    </li>
                    <li>
                        <Link to="/especialidades" onClick={fecharMenu} className={styles.menuLink}>Especialidades</Link>
                    </li>
                    <li>
                        <Link to="/sobre" onClick={fecharMenu} className={styles.menuLink}>Sobre</Link>
                    </li>
                    <li>
                        <Link to="/projetos" onClick={fecharMenu} className={styles.menuLink}>Projetos</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default MenuMobile;