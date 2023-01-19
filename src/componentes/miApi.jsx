import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Caracteristicas from "./Caracteristicas";
import Modal2 from "./Modal2";

const MiApi = ({ valorBusqueda }) => {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [estadoModal, setEstadoModal] = useState(false);
  const [nombre, setNombre] = useState([]);
  const [modalShow, setModalShow] = useState(false);


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
      <div>
        
        <Caracteristicas
          children={nombre}
          estado={estadoModal}
          cambiarEstado={setEstadoModal}
        />
        <Modal2 
        children={nombre}
        show={modalShow}
        onHide={() => setModalShow(false)}
        />
      </div>
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
                        <Card.Title>{p.name}</Card.Title>
                        <div
                          className="d-flex"
                          style={{ justifyContent: "center" }}
                        >
                            <Button
                             variant="primary"
                             style={{ width: "10rem" }}
                             onClick={() => {
                               setEstadoModal(!estadoModal);
                               setNombre(p);
                             }}
                            >
                            modal 1
                          </Button>
                          
                          <Button 
                          variant="primary" 
                          onClick={() => {
                            setModalShow(true); 
                            setNombre(p);}}>
                            modal 2
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
    </Container>
  ) : (
    <div>
        <h3>Cargando...</h3>
        <Spinner animation="border" variant="success"/>
    </div>
  );
};
export default MiApi;
