import React from 'react'
import { Container } from '../../styledComponents/containers'
import { SubHeader, Header, Paragraph } from '../../styledComponents/typography'

const Intro = ({ children}) => {
  const { 
    subHeader, 
    header, 
    paragraph, 
    width,
    display,
    justify,
    weight
   } = children
    
  return (
    <Container width={width} display={display} justify={justify}>
      <Container 
        width='63%' 
        display='flex' 
        direction='column'>
        <SubHeader 
          weight={weight}
          color='#757575'
          >
          {subHeader}
        </SubHeader>
        <Header margin='0 0 30px 0'>{header}</Header>
        <Paragraph color='#757575'>{paragraph}</Paragraph>
      </Container>
    </Container >
  )
}

export default Intro
