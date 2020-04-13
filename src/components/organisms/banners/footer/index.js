import React from 'react'

import { Container } from '../../../styledComponents/containers'
import { SubHeader, Paragraph, FooterDetails } from '../../../styledComponents/typography'
import { StyledImage } from '../../../styledComponents/styledImages'
import FBLogo from '../../../../images/facebook-brands.svg'

const noMargin = {
  marginBottom: 0
}

const Footer = () => {
  return(
    <Container 
      position='relative'
      left='0'
      bottom='0'
      background='#F8F9FA'
      height='165px'
      >
      <Container margin='0 120px' padding='15px 0'>
        <Container display='flex' justify='space-between'>
          <Container width='20%' display='flex' justify='center' align='center' direction='column'>
            <SubHeader fontFamily="'Kaushan Script', cursive">Lo-well</SubHeader>
            <SubHeader fontFamily="'Kaushan Script', cursive">Terug in balans</SubHeader>
          </Container>
          <Container display='flex' direction='column' width='20%' align='center'>
            <Paragraph>Greta Lowel</Paragraph>
            <FooterDetails>+32 (0)485649035</FooterDetails>
            <FooterDetails style={noMargin}><a href='mailto:greta.lowel@hotmail.com' target='_blank' rel="noopener noreferrer">greta.lowel@hotmail.com</a></FooterDetails>
          </Container>
          <Container display='flex' direction='column' width='20%' align='center'>
            <Paragraph>Hilde Lowel</Paragraph>
            <FooterDetails>+32 (0)47879338</FooterDetails>
            <FooterDetails style={noMargin}><a href='mailto:hilde.lowel@gmail.com' target='_blank' rel="noopener noreferrer">hilde.lowel@gmail.com</a></FooterDetails>
          </Container>
          <Container display='flex' direction='column' width='20%' align='center'>
            <Paragraph>Follow us</Paragraph>
            <a href='https://www.facebook.com/groups/443325126249119/' target='_blank' rel="noopener noreferrer"><StyledImage src={FBLogo} alt='fb' width='30px' /></a>
          </Container>
        </Container>
      </Container>
    </Container>
  )
}

export default Footer