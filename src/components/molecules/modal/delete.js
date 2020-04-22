import React from 'react'

import { Modal, Button } from 'react-bootstrap'

const DeleteModal = ({show, setShow, obj, deleteObj}) => {
  const handleDelete = () => {
    setShow(false)
    deleteObj()
  }

  return (
    <Modal show={show} onHide={() => setShow(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Are you sure?</Modal.Title>
      </Modal.Header>
      <Modal.Body>Please confirm below if you want to delete {obj.name}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShow(false)}>
          Close
          </Button>
        <Button variant="danger" onClick={handleDelete}>
          Delete
          </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal