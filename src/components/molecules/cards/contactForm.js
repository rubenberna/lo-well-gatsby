import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import * as emailjs from 'emailjs-com';

import { useFormInput } from '../../../hooks'
import { Container } from '../../styledComponents/containers'
import { SubHeader, Paragraph, StyledSpan } from '../../styledComponents/typography'
import { Phone, Email } from '../../atoms/images/icons'

const ContactForm = ({ therapists }) => {
  const email = useFormInput('')
  const text = useFormInput('')
  const [error, setError] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [disabled, setDisabled] = useState(false)

  let template_id = process.env.GATSBY_EMAILJS_TEMPLATEID
  let user_id = process.env.GATSBY_EMAILJS_USERID
  let service_id = process.env.GATSBY_EMAILJS_SERVICEID
  
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
      sendEmail()
    }
  }

  const sendEmail = () => {
    const template_params = {
      email: email.value,
      message: text.value,
    }
    emailjs.send(service_id, template_id, template_params, user_id)
      .then(res => console.log('success', res.status, res.text))
      .catch(e => console.log('error', e))
  }

  const renderAlert = () => {
    if(showAlert) {
      let msg = error ? 'Please fill in all details' : 'Your msg was sent!'
      let variant = error ? 'danger' : 'success'
      return <Alert variant={variant}>{msg}</Alert> 
    }  
  }

  const renderTherapistContacts = () => {
    let last = therapists.length -1
    return therapists.map((t, i) => (
      <>
        <SubHeader textAlign='center'>{t.name}</SubHeader>
        <Paragraph>
          <StyledSpan weight='600' color='#616161'>
            <Phone/>{' '}
          </StyledSpan>
          <StyledSpan weight='200'>
            <a href={`tel: ${t.phone}`}>{t.phone}</a>
          </StyledSpan>
        </Paragraph>
        <Paragraph>
          <StyledSpan weight='600' color='#616161'>
            <Email/>{' '}
          </StyledSpan>
          <StyledSpan weight='200'>
            <a href={`mailto:${t.email}`} target='_blank' rel="noopener noreferrer">{t.email}</a>
          </StyledSpan>
        </Paragraph>
        {i !== last && <hr/>}
      </>
    ))
  }

  return (
    <Container display='flex' justify='space-around' direction='row-reverse'>
      <Container width='50%'>
        <SubHeader margin='0 0 20px 0' weight='200'>Get in touch ;)</SubHeader>
        {renderAlert()}
        <form onSubmit={handleSubmit}>
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
      <Container 
        width='28%' 
        border='0.5px solid #bdbdbd'
        padding='25px'
        background='#fafafa'
        >
        {renderTherapistContacts()}
      </Container>
    </Container>
  )
}

export default ContactForm
