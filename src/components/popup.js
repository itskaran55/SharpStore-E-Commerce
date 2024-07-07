import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const PopUp = ({ show, handleClose }) => {
  console.log('show:', show);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title style={{color : 'green'}}>Item Added to Cart</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{color : 'red'}}>Item has been successfully added to your cart.</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PopUp;
