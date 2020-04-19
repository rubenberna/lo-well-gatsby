import React from 'react'
import { Container } from '../../styledComponents/containers'

const StatusBoard = ({ user }) => {

  const conditionalRender = () => {
    if (user) return (
      <Container position='absolute' right='20px' >
        {user.email}
      </Container>
    ) 
    else return ''

  }

  return conditionalRender()
}

export default StatusBoard
