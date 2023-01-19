import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const Caracteristicas = ({ children, estado, cambiarEstado }) => {
  return (
    <div
      className="modal show"
      style={{ display: "block", position: "initial" }}
    >
      {estado && (
        <Modal.Dialog>
          <Modal.Header>
            <img src={children.image}style={{ borderRadius: "100px" }}></img>
            <Modal.Title>{children.name}</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <p>
              <strong>Tipo de especie:</strong> {children.species}
            </p>
            <p>
              <strong>Estado:</strong> {children.status}
            </p>
            <p>
              <strong>Genero:</strong> {children.gender}
            </p>
            <p>
              <strong>Planeta origen:</strong> {children.origin.name}
            </p>
            <p>
              <strong>Localidad:</strong> {children.location.name}
            </p>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="primary" onClick={() => cambiarEstado(false)}>
              Cerrar
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      )}
    </div>
  );
};

export default Caracteristicas;
