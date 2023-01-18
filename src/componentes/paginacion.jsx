import React from "react";
import Pagination from "react-bootstrap/Pagination";
import { Container, Col, Row }from "react-bootstrap";

const Paginacion = () => {
  let active = 1;
  let items = [];
  for (let number = 1; number <= 5; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <Container className="d-flex" style={{ justifyContent: "center" }} >
        <Row >
            <Col >   

                <div style={{ margin: "2vh" }}>
                    <Pagination>{items}</Pagination>
                </div>
                
            </Col>

        </Row>
    </Container>
  );
};

export default Paginacion;
