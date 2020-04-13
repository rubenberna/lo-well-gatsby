import React from 'react'
import { Container } from '../../styledComponents/containers'
import Intro from '../intro'

import './style.css'

const TherapistCard = ({ therapist }) => (
  <Container
    margin='30px 0' 
    display='flex'
    padding='39px'
    radius='4px'
    >
    <img 
      src={therapist.photoUrl} 
      alt={therapist.name}
      className='therapist-photo'
      />
    <Intro>
      {{
        subHeader: therapist.name,
        paragraph: therapist.intro,
        display: 'flex',
        justify: 'center',
      }}
    </Intro>
  </Container>
)


export default TherapistCard