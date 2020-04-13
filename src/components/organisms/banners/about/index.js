import React, { useState, useEffect } from 'react'
import { Container } from '../../../styledComponents/containers'
import  Presentation from '../../../molecules/presentation'
import Controls from '../../../molecules/controls'


const AboutBanner = ({ therapists }) => {
  const [active, setActive] = useState(therapists[0].name)
  const [presentationObj, setPresentationObj] = useState(therapists[0])

  useEffect(() => {
    if (active === 'contact') setPresentationObj('contact')
    else {
      const therapist = therapists.find(t => t.name === active)
      setPresentationObj(therapist)
    }
  }, [active, setPresentationObj, therapists])

  return (
    <Container 
      padding='30px 160px' 
      display='flex'
      justify='space-between'
      >
      <Presentation presentationObj={presentationObj}/>
      <Controls 
        active={active}
        setActive={setActive} 
        therapists={therapists}/>
    </Container>
  )
}

export default AboutBanner