import React from 'react'

import { Container } from '../../../styledComponents/containers'
import Calendar from '../../../molecules/calendar'
import Address from '../../../molecules/address'
import Intro from '../../../molecules/intro'
import { ImageFrame } from '../../../molecules/imgFrame'

const AgendaBanner = ({ event, number, last }) => {

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
        <Calendar event={event}/>
        <Intro>
          {{
            header: event.name,
            strongHeader: true,
            paragraph: event.description,
            display: 'flex',
            justify: even ? 'flex-start' : 'flex-end',
            footer: <Address event={event}/>
          }}
        </Intro>
        <Container>
          <ImageFrame photoUrl={event.photoUrl}/>
        </Container>
      </Container>
      { number !== (last -1) && <hr/>}
    </div>
  )
}

export default AgendaBanner