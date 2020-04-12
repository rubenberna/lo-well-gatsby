import React from 'react'
import moment from 'moment'

import { Container } from '../../../styledComponents/containers'
import { Paragraph } from '../../../styledComponents/typography'
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
        <Container
          display='flex'
          direction='column'
          align='center'
          padding='0 15px'
          margin='0 20px'
          border='solid'
          >
          <Paragraph 
            weight='600'
            margin='0' 
            size='30px'>
            {moment(event.date).format("MMM").toUpperCase()}
          </Paragraph>
          <Paragraph>{moment(event.date).format("Do")}</Paragraph>
        </Container>
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
      <hr/>
    </div>
  )
}

export default AgendaBanner