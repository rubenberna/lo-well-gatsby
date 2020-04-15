import React from 'react'
import moment from 'moment'

import { Container } from '../../styledComponents/containers'
import { Paragraph } from '../../styledComponents/typography'

const Calendar = ({ event }) => {

  const renderCalendar = () => {
    if (event.regular) return (
      <Container
        display='flex'
        direction='column'
        align='center'
        padding='0 15px'
        margin='0 20px'
        border='solid'
      >
        <Paragraph
          weight='100'
          margin='0'
          align='center'
          size='30px'>
          Elke week
        </Paragraph>
      </Container>
    )
    else return (
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
    )
  }

  return renderCalendar()
}

export default Calendar