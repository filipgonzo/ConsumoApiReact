import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

import Modal from "react-bootstrap/Modal";

const MiApi = ({ valorBusqueda }) => {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [nombre, setNombre] = useState({});

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const res = await fetch(
      "https://rickandmortyapi.com/api/character/?page=1"
    );
    const data = await res.json();
    setPersonajes(data.results);
    setCargando(true);
  }

  return cargando ? (
    <Container>
      <Row>
        {personajes
          .filter((p) => {
            return p.name.toLowerCase().includes(valorBusqueda.toLowerCase());
          })
          .map((p) => {
            return (
              <Col key={p.id} style={{ marginTop: "2vh" }}>
                <Card style={{ width: "19rem" }}>
                  <Card.Img variant="top" src={p.image} />
                  <Card.Body>
                    <Container
                      className="d-flex"
                      style={{ justifyContent: "center" }}
                    >
                      <Row>
                        <Card.Title style={{ textAlign: "center" }}>
                          {p.name}
                        </Card.Title>
                        <div
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                          <Button
                            variant="primary"
                            onClick={() => {
                              handleShow(false);
                              setNombre(p);
                            }}
                          >
                            Ver Mas
                          </Button>
                        </div>
                      </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
      </Row>
      <>
        <Modal show={show} onHide={handleClose}>
          <div nombre={nombre}>
            <Modal.Header>
              <Modal.Title>{nombre.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="d-flex" style={{ justifyContent: "center" }}>
                <img
                  src={nombre.image}
                  style={{ borderRadius: "100px", marginBottom: "3rem" }}
                ></img>
              </div>
              <div>
                <p>
                  <strong>Tipo de especie:</strong> {nombre.species}
                </p>
                <p>
                  <strong>Estado:</strong> {nombre.status}
                </p>
                <p>
                  <strong>Genero:</strong> {nombre.gender}
                </p>
                <p>
                  <strong>Planeta origen:</strong> {nombre.origin.name}
                </p>
                <p>
                  <strong>Localidad:</strong> {nombre.location.name}
                </p>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </div>
        </Modal>
      </>
    </Container>
  ) : (
    <div>
      <h3>Cargando...</h3>
      <Spinner animation="border" variant="success" />
    </div>
  );
};
export default MiApi;
