import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Caracteristicas = ({children, estado, cambiarEstado}) => {



  return (
    <div className="modal show"
    style={{ display: 'block', position: 'initial' }}>

        {estado && 
            <Modal.Dialog>
            <Modal.Header>
                <Modal.Title>nombre personaje</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <ul>
                    <li>
                        <p>descripcion personaje</p>
                    </li>
                </ul>
            </Modal.Body>
            {children}
            <Modal.Footer>
                <Button variant="primary" onClick={() => cambiarEstado(false)}>Cerrar</Button>
            </Modal.Footer>
            </Modal.Dialog>
        }
    </div>
  )
}

export default Caracteristicas