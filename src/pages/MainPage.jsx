// src/pages/MainPage.jsx
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./MainPage.css";

export const MainPage = ({ usuario, handleLogout }) => {
  const backgroundImageUrl = `${import.meta.env.BASE_URL}assets/Racing-trainers-banner.webp`;
  return (
    <div className="MainPage">
      
      <div className="TituloPaginaPrincipal" style={{ backgroundImage: `url(${backgroundImageUrl})` }}>
        <h1>PAGINA PRINCIPAL</h1>
      </div>
      
    </div>
  );
};