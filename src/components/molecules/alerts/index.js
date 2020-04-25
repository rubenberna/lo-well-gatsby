import React from 'react'
import { Alert } from 'react-bootstrap'


export const FormAlert = ({ show, setShow }) => {

  const renderSuccess = () => (
    <Alert variant="success" onClose={() => setShow('')} dismissible>
      <Alert.Heading>Well done!</Alert.Heading>
      <p>
        The new element was correctly saved in the database and it will appear in the website in about 1:30 mins from now
        </p>
    </Alert>
  )

  const renderDanger = () => (
    <Alert variant="danger" onClose={() => setShow('')} dismissible>
      <Alert.Heading>Form is incomplete</Alert.Heading>
      <p>
        There are still some empty fields in the form
        </p>
    </Alert>
  )

  const conditionalRender = () => {
    if(show === 'success') return renderSuccess()
    else if(show === 'danger') return renderDanger()
    else return ''
  }

  return conditionalRender()
}