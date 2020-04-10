import React from 'react'

import { Container } from '../../../styledComponents/containers'
import Intro from '../../../molecules/intro'
import { ImageFrame } from '../../../molecules/imgFrame'

const AgendaBanner = ({ event, number }) => {

  const even = !!number % 2 === 0  
  
  return (
    <div className='ui container'>
      <Container 
        display='flex' 
        align='center'
        justify='center'
        width='100%' 
        margin='50px 0' 
        direction={even ? 'row' : 'row-reverse'}>
        <Intro>
          {{
            header: event.name,
            strongHeader: true,
            paragraph: event.description,
            display: 'flex',
            justify: even ? 'flex-start' : 'flex-end',
            footer: event.location
          }}
        </Intro>
        <Container>
          <ImageFrame photoUrl={event.photoUrl}/>
        </Container>
      </Container>
    </div>
  )
}

export default AgendaBanner