import React from 'react';
import { Link } from 'react-router-dom';
import feetLogo from "../assets/Mi proyecto.png";
import backLogo from "../assets/angulo-izquierdo.png";
import ButtonMenu from '../components/ButtonMenu'; // Asegúrate de que la ruta sea correcta
import "../styles/header.css";

const Header = ({ show }) => {
  return (
    <header className="Header">
      <div className="Header__back">
        <Link to="/">
          <img src={backLogo} alt="Botón para volver atrás" className="Header__back-icon" />
          <span className="Header__back-text">Back</span>
        </Link>
      </div>
      <nav className={show ? "Header__nav Header__nav--show" : "Header__nav"}>
        {show && <ButtonMenu />}
        <ul className="Nav">
          <Link to="/home">
            <li>Inicio</li>
          </Link>
          <Link to="/createDog">
            <li>Crear perro</li>
          </Link>
          <Link to="/favoritos">
            <li>Favoritos</li>
          </Link>
        </ul>
      </nav>
      {!show && (
        <img className="Header__logo" src={feetLogo} alt="Logo de la página" />
      )}
    </header>
  );
};

export default Header;
