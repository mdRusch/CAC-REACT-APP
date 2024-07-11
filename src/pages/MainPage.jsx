// src/pages/MainPage.jsx
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./MainPage.css";
import bannerImage from "./assets/Racing-trainers-banner.webp";

export const MainPage = ({ usuario, handleLogout }) => {
  return (
    <div className="MainPage">
      
      <div className="TituloPaginaPrincipal" style={{ backgroundImage: `url(${bannerImage})` }}>
        <h1>PAGINA PRINCIPAL</h1>
      </div>
      
    </div>
  );
};