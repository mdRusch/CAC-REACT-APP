// src/components/Header.jsx
import { Link } from "react-router-dom";
import './Header.css';

export const Header = ({ usuario, handleLogout }) => {
  return (
    <div className="Header">
      <p className="Titulo">RUNNING APP</p>
      <ul className="HeaderLinks">
        {usuario ? (
          <li className="LogOut" onClick={handleLogout}>SALIR</li>
        ) : (
          <Link to={"/login"}><li className="LogIn">INGRESAR</li></Link>
        )}
      </ul>
    </div>
  );
};
