import React from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

export const ActividadModal = ({
  showModal,
  handleClose,
  actividadForm,
  handleActividadChange,
  handleActividadSubmit,
  editActividadId
}) => (
  <Modal show={showModal} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>{editActividadId ? "Editar Actividad" : "Agregar Actividad"}</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleActividadSubmit}>
        <Form.Group>
          <Form.Label>Tipo de Actividad</Form.Label>
          <Form.Control
            as="select"
            name="tipo"
            value={actividadForm.tipo}
            onChange={handleActividadChange}
          >
            <option value="">Seleccionar...</option>
            <option value="caminata">Caminata</option>
            <option value="correr">Correr</option>
            <option value="musculacion">Musculación</option>
            <option value="bicicleta">Bicicleta</option>
            <option value="natacion">Natación</option>
            <option value="deporte">Deporte</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Tiempo (minutos)</Form.Label>
          <Form.Control
            type="number"
            name="tiempo"
            value={actividadForm.tiempo}
            onChange={handleActividadChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Distancia (km)</Form.Label>
          <Form.Control
            type="number"
            name="distancia"
            value={actividadForm.distancia}
            onChange={handleActividadChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {editActividadId ? "Guardar Cambios" : "Agregar Actividad"}
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cerrar
      </Button>
    </Modal.Footer>
  </Modal>
);
