import React, { useState } from 'react'

import { firebaseApp } from '../../../services/firebase'
import { Container } from '../../styledComponents/containers'
import { StyledSpan, NoteCounter } from '../../styledComponents/typography'
import { lightGrey } from '../../styledComponents/variables'
import { ExpandIcon, ContractIcon } from '../../atoms/images/icons'
import Timer from '../../atoms/timer'

const StatusBoard = ({ user, timings }) => {
  const [expanded, setExpanded] = useState(false)

  const handleLogout = () => {
    firebaseApp.auth().signOut()
  }

  const renderTimers = () => {
    return timings.map((t, i) => <Timer key={i} counter={t} index={i}/>)
  }

  const renderIcons = () => {
    if (timings.length) {
      if(expanded) return <ContractIcon onClick={() => setExpanded(!expanded)}/>
      else return <ExpandIcon onClick={() => setExpanded(!expanded)}/>
    }
  }

  const conditionalRender = () => {
    if (user) return (
      <Container 
        position='absolute'
        right='30px'
        width='300px'
        padding='15px'
        background='#fff9c4'
        radius='6px'
        overflow='hidden'
        height={expanded ? 'auto' : '50px'}
        >
        <Container display='flex' justify='space-between'>
          <Container>
            {renderIcons()}
            <StyledSpan margin='0 5px 0 20px'>Hi, {user.displayName}!</StyledSpan> 
            {timings.length > 0 && 
            <NoteCounter>{timings.length}</NoteCounter>}
          </Container>
          <StyledSpan
            color={lightGrey}
            cursor='pointer'
            onClick={handleLogout}>
            Logout
            </StyledSpan>
        </Container>
        <Container margin='10px 0'>
          {renderTimers()}
        </Container>
      </Container>
    ) 
    else return ''

  }

  return conditionalRender()
}

export default StatusBoard
