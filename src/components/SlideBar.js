import React from "react";
import { Link } from "react-router-dom";
import styles from './SlideBar.module.css'

function SlideBar() {
  return (
    <nav className={styles.slidebar}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/projetos">Projetos</Link>
        </li>
        <li>
          <Link to="/contato">Contato</Link>
        </li>
      </ul>
    </nav>
  );
}

export default SlideBar;
