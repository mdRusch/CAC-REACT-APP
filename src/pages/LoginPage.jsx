// src/pages/LoginPage.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig/firebase.js";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export const LoginPage = () => {
  const [registro, setRegistro] = useState(false);
  const navigate = useNavigate();

  const handlerSubmit = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const contraseña = e.target.contraseña.value;

    try {
      if (registro) {
        await createUserWithEmailAndPassword(auth, email, contraseña);
      } else {
        await signInWithEmailAndPassword(auth, email, contraseña);
        navigate("/running-app"); // Redirigir al usuario a la página de RunningApp después del login
      }
      
    } catch (error) {
      console.error("Error al iniciar sesión o registrarse:", error);
    }
  };

  return (
    <div> 
      
      <div className="row container p-4">
      
      <div className="col-md-4">
        <div className="mt-5 ms-5">
          <h1>{registro ? "Registrarse" : "Iniciar Sesión"}</h1>
          <form onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label className="form-label">Dirección de Email</label>
              <input type="email" className="form-control" name="" id="email" placeholder="Ingresar Email" required />
            </div>
            <div className="mb-3">
              <label className="form-label">Contraseña</label>
              <input type="password" className="form-control" name="" id="contraseña" placeholder="Ingresar Contraseña" required />
            </div>
            <button className="btn btn-primary" type="submit">{registro ? "Registrarse" : "Iniciar Sesión"}</button>
          </form>
          <div className="form-group">
            <button className="btn btn-secondary mt-4 form-control" type="submit" onClick={() => setRegistro(!registro)}>
              {registro ? "¿Ya tienes una cuenta? Inicia Sesión" : "¿No tienes cuenta? Regístrate"}
            </button>
          </div>
        </div>
      </div>
      <div className="col-md-8"></div>
      
    </div>
    </div>
    
  );
};
