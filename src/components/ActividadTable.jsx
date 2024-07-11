import React from 'react';
import { Table, Button } from 'react-bootstrap';

export const ActividadTable = ({ actividades, handleEdit, handleDelete }) => (
  <div className="actividades">
    <h1>Registro de actividades</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Tiempo</th>
          <th>Distancia</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {actividades.map((actividad) => (
          <tr key={actividad.id}>
            <td>{actividad.tipo}</td>
            <td>{actividad.tiempo}</td>
            <td>{actividad.distancia}</td>
            <td>
              <Button variant="warning" onClick={() => handleEdit(actividad)}>
                Editar
              </Button>
              <Button variant="danger" onClick={() => handleDelete(actividad.id)}>
                Eliminar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);
