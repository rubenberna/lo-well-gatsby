import React from 'react'
import FadeIn from 'react-fade-in';

import { Container } from '../../../styledComponents/containers'
import Calendar from '../../../molecules/calendar'
import EventDetails from '../../../molecules/eventDetails'
import Intro from '../../../molecules/intro'
import { ImageFrame } from '../../../molecules/imgFrame'

const AgendaBanner = ({ event, number, last }) => {

  const even = !!number % 2 === 0  

  return (
    <FadeIn>
      <div className='ui container' o>
        <Container 
          display='flex' 
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
              footer: <EventDetails slug={event.slug}/>
            }}
          </Intro>
          <Container>
            <ImageFrame photoUrl={event.photoUrl}/>
          </Container>
        </Container>
        { number !== (last -1) && <hr/>}
      </div>
    </FadeIn>
  )
}

export default AgendaBanner