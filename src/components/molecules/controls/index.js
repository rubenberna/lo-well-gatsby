import React from 'react'
import { Container } from '../../styledComponents/containers'
import { StyledList, StyledLi } from '../../styledComponents/lists'
import { Paragraph } from '../../styledComponents/typography'


const Controls = ({ active, setActive, therapists }) => {

  const therapistsList = therapists.map((t, i) => 
    <StyledLi 
      key={i} 
      color={active === t.name ? 'red' : '#fff'}
      hoverOpacity='0.8'
      onClick={() => setActive(t.name)}
        >
        {t.name}
      </StyledLi>
  )

  return (
    <Container 
      background='black' 
      width='230px' 
      height='400px'
      display='flex'
      direction='column'
      padding='20px'
      >
      <Paragraph color='#fff' margin='5px 0' size='20px'>Over ons</Paragraph>
      <Container height='.25rem' width='3.75rem' background='#fff' margin='0 0 12px 0'/>
      <StyledList>
        {therapistsList}
        <StyledLi 
          hoverOpacity='0.8'
          color={active === 'contact'? 'red' : '#fff'}
          onClick={() => setActive('contact')}
          >
        Contact
        </StyledLi>
      </StyledList>
    </Container>
  )
}

export default Controls