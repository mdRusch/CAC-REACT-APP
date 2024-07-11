// src/components/Footer.jsx
import { Link } from "react-router-dom";
import './Footer.css';

export const Footer = ({ usuario, handleLogout }) => {
  return (
    <div className="Footer">
      <ul className="FooterLinks">
        {usuario ? (
          <li className="LogOut" onClick={handleLogout}>SALIR</li>
        ) : (
          <Link to={"/login"}><li className="LogIn">INGRESAR</li></Link>
        )}
      </ul>
      <p className="FooterP">Sitio desarrollado en el marco del programa Codo a Codo.</p>
    </div>
  );
};
