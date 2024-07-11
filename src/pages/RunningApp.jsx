import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig/firebase.js";
import { doc, setDoc, getDoc, collection, addDoc, query, where, getDocs, updateDoc, deleteDoc } from "firebase/firestore";
import { Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import "./RunningApp.css";
import { UserInfo } from "../components/UserInfo.jsx";
import { ActividadTable } from "../components/ActividadTable.jsx";
import { ActividadModal } from "../components/ActividadModal.jsx";

export const RunningApp = ({ usuario, handleLogout }) => {
  const [userInfo, setUserInfo] = useState({
    nombre: "",
    apellido: "",
    edad: "",
    altura: "",
    peso: "",
  });
  const [actividades, setActividades] = useState([]);
  const [actividadForm, setActividadForm] = useState({
    tipo: "",
    tiempo: "",
    distancia: "",
  });
  const [editActividadId, setEditActividadId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (usuario) {
      const fetchUserInfo = async () => {
        const docRef = doc(db, "usuarios", usuario.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserInfo(docSnap.data());
        }
      };
      fetchUserInfo();
      fetchActividades();
    }
  }, [usuario]);

  const fetchActividades = async () => {
    if (usuario) {
      const q = query(collection(db, "actividades"), where("uid", "==", usuario.uid));
      const querySnapshot = await getDocs(q);
      const actividadesList = [];
      querySnapshot.forEach((doc) => {
        actividadesList.push({ ...doc.data(), id: doc.id });
      });
      setActividades(actividadesList);
    }
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleActividadChange = (e) => {
    setActividadForm({
      ...actividadForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (usuario) {
      await setDoc(doc(db, "usuarios", usuario.uid), userInfo);
    }
  };

  const handleActividadSubmit = async (e) => {
    e.preventDefault();
    if (usuario) {
      if (editActividadId) {
        const actividadRef = doc(db, "actividades", editActividadId);
        await updateDoc(actividadRef, actividadForm);
      } else {
        await addDoc(collection(db, "actividades"), { ...actividadForm, uid: usuario.uid });
      }
      setActividadForm({
        tipo: "",
        tiempo: "",
        distancia: "",
      });
      setEditActividadId(null);
      fetchActividades();
      setShowModal(false);
    }
  };

  const handleEdit = (actividad) => {
    setActividadForm(actividad);
    setEditActividadId(actividad.id);
    setShowModal(true);
  };

  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "actividades", id));
    fetchActividades();
  };

  return (
    <div className="RunningApp row justify-content-around">
      <UserInfo 
        userInfo={userInfo}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
      <div className="col-7 ms-4"><Button variant="primary" onClick={() => setShowModal(true)}>
        Agregar Actividad
      </Button>
      <ActividadTable
        actividades={actividades}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
      </div>
      <ActividadModal
        showModal={showModal}
        handleClose={() => setShowModal(false)}
        actividadForm={actividadForm}
        handleActividadChange={handleActividadChange}
        handleActividadSubmit={handleActividadSubmit}
        editActividadId={editActividadId}
      />
    </div>
  );
};
