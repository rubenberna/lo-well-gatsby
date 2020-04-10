import React from 'react'
import { Container } from '../../styledComponents/containers'
import { SubHeader, Header, Paragraph, Footer } from '../../styledComponents/typography'
import { lightGrey } from '../../styledComponents/variables'

const Intro = ({ children}) => {
  const { 
    subHeader, 
    header, 
    paragraph, 
    width,
    display,
    justify,
    weight,
    footer,
    strongHeader
   } = children
    
  return (
    <>
    <Container width={width} display={display} justify={justify}>
      <Container 
        width='63%' 
        display='flex' 
        direction='column'>
        <SubHeader 
          weight={weight}
          color={lightGrey}
          >
          {subHeader}
        </SubHeader>
        <Header margin='0 0 30px 0' weight={strongHeader ? 700 : ''}>{header}</Header>
        <Paragraph color={lightGrey}>{paragraph}</Paragraph>
        <Footer 
          margin='40px 0 0 0' 
          weight='700' 
          color={lightGrey}
          size='14px'
          >
          {footer}
        </Footer>
      </Container>
    </Container >
    </>
  )
}

export default Intro
