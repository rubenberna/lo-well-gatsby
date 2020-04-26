import React, { useState, useEffect } from 'react'
import { Container } from '../../styledComponents/containers'
import TherapistCard from '../cards/therapistCard'
import ContactForm from '../cards/contactForm'
import {AboutPlaceholder} from '../placeholders'
const Presentation = ({ presentationObj }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 300)
    return () => clearTimeout(loading)
  }, [loading, setLoading])

  const renderPresentation = () => {
    if (loading) return <AboutPlaceholder/>
    else {
      if(typeof presentationObj === 'string') return <ContactForm/>
      else return <TherapistCard therapist={presentationObj}/>
    }
  } 

  return (
    <Container width='78%'>
      {renderPresentation()}
    </Container>
  )
}

export default Presentation