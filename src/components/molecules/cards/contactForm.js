import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'

import { useFormInput } from '../../../hooks'
import { Container } from '../../styledComponents/containers'

const ContactForm = () => {
  const email = useFormInput('')
  const text = useFormInput('')
  const [error, setError] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [disabled, setDisabled] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!email.value || !text.value) {
      setError(true)
      setShowAlert(true)
    }
    else {
      setError(false)
      setShowAlert(true)
      setDisabled(true)
    }
  }

  const renderAlert = () => {
    if(showAlert) {
      let msg = error ? 'Please fill in all details' : 'Your msg was sent!'
      let variant = error ? 'danger' : 'success'
      return <Alert variant={variant}>{msg}</Alert> 
    }  
  }


  return (
    <Container width='80%'>
      {renderAlert()}
      <form
        action="https://getform.io/f/8a48c06e-dfe2-481e-9f1d-fedb363e594f" method="POST">
        <input type="hidden" name="form-name" value="contact" />
        <div className="form-group">
          <label htmlFor="exampleFormControlInput1">Email adres</label>
          <input
            disabled={disabled}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="name@example.com" {...email} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Bericht</label>
          <textarea
            disabled={disabled}
            name="message"
            className="form-control"
            id="message"
            rows="3" {...text} />
        </div>
        <button disabled={disabled} type="submit" className="btn btn-primary">Verzenden</button>
      </form>
    </Container>
  )
}

export default ContactForm
