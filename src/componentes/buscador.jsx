import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';



const Buscador = ({setValorBusqueda}) => {
    const [valorCaja, setValorCaja] = useState (''); 
  return (
    <>
    <Navbar bg="secondary" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Rick & Morty</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }}navbarScroll></Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar Personaje"
              className="me-2"
              aria-label="Search"
              onChange={(e)=>setValorCaja(e.target.value)}

            />
            <Button variant="success" onClick={()=>setValorBusqueda(valorCaja)}>Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </>
  )
}

export default Buscador;