import React from 'react'
import { Container } from '../../styledComponents/containers'
import { StyledImage } from '../../styledComponents/styledImages'
import Intro from '../intro'

const TherapistCard = ({ therapist }) => {
  console.log(therapist);
  
  return (
    <Container
      margin='30px 0' 
      display='flex'
      padding='39px'
      radius='4px'
      >
      <StyledImage 
        src={therapist.photoUrl} 
        alt={therapist.name}
        width='300px'
        height='300px'
        fit='contain'
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
}

export default TherapistCard