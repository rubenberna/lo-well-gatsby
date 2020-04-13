import React from 'react'
import { Container } from '../../styledComponents/containers'
import TherapistCard from '../cards/therapistCard'
import ContactForm from '../cards/contactForm'
const Presentation = ({ presentationObj }) => {

  const renderPresentation = () => {
    if(typeof presentationObj === 'string') return <ContactForm/>
    else return <TherapistCard therapist={presentationObj}/>
  } 

  return (
    <Container width='78%'>
      {renderPresentation()}
    </Container>
  )
}

export default Presentation