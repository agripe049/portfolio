import React from "react";
import { Link } from "react-router-dom";
import styles from './SlideBar.module.css'
import costs_logo from '../img/costs_logo.png'

function SlideBar() {
  return (
    <header>
      <div className={styles.interface}>
        <div className={styles.logo}>
          <Link to="/">
              <img src={costs_logo} alt="logo"/>
          </Link>
        </div>
        <nav className={styles.menuDesktop}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/especialidades">Especialidades</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
              <Link to="/projetos">Projetos</Link>
            </li>
          </ul>
        </nav>

        <div className={styles.btn_contato}>
          <Link>
              <button>Contato</button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default SlideBar;
