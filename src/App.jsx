// src/App.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { MainPage } from "./pages/MainPage.jsx";
import { RunningApp } from "./pages/RunningApp.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { useState, useEffect } from "react";
import { auth } from "./firebaseConfig/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export const App = () => {
  const [usuario, setUsuario] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuarioFirebase) => {
      if (usuarioFirebase) {
        setUsuario(usuarioFirebase);
      } else {
        setUsuario(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setUsuario(null);
  };

  // Componente para proteger rutas
  const ProtectedRoute = ({ element, ...rest }) => {
    return usuario ? element : <Navigate to="/login" />;
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Header usuario={usuario} handleLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/running-app" element={<ProtectedRoute element={<RunningApp usuario={usuario} handleLogout={handleLogout} />} />} />
        </Routes>
        <Footer usuario={usuario} handleLogout={handleLogout} />
      </BrowserRouter>
    </div>
  );
};
