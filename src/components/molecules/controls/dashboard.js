import React from 'react'

import { Container } from '../../styledComponents/containers'
import { Paragraph } from '../../styledComponents/typography'
import { StyledLi, StyledList } from '../../styledComponents/lists'

const list = [
  { key: 0, name: 'Events', value: 'events'},
  { key: 1, name: 'Therapies', value: 'therapies'},
  { key: 3, name: 'About', value: 'about'},
]

const ControlsDashboard = ({ active, setActive }) => (
  <Container
    background='black'
    width='230px'
    minHeight='90vh'
    height='inherit'
    display='flex'
    direction='column'
    padding='20px'
  >
    <Paragraph color='#fff' margin='5px 0' size='20px'>Dashboard</Paragraph>
    <Container height='.25rem' width='3.75rem' background='#fff' margin='0 0 12px 0' />
    <StyledList>
      {list.map(t => (
        <StyledLi
          key={t.key}
          hoverOpacity='0.8'
          color={active === t.value ? 'red' : '#fff'}
          onClick={() => setActive(t.value)}
        >
          {t.name}
        </StyledLi>
      ))}
    </StyledList>
  </Container>
)


export default ControlsDashboard