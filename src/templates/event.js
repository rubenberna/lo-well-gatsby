import React from 'react'
import LazyLoad from 'react-lazyload';

import SEO from "../components/seo"
import Layout from '../components/layout'
import Ribbon from '../components/molecules/ribbon'
import { Container } from '../components/styledComponents/containers'
import { SubHeader, Paragraph } from '../components/styledComponents/typography'
import { StyledImage } from '../components/styledComponents/styledImages'
import { secondaryColor } from '../components/styledComponents/variables'
import VenuesCard from '../components/molecules/cards/venuesCard'

const EventTemplate = ({ pageContext }) => {
  
  const {
    name,
    photoUrl,
    description,
    date,
    location,
    regular,
    regularVenue,
    price
  } = pageContext

  const venue = {
    regular,
    date,
    location,
    regularVenue,
    price
  }

  const renderContent = () => (
    <Container
      margin='0 auto'
      maxWidth='1143px'
      padding='0 1.0875rem 1.45rem'
      display='flex'
      justify='space-between'
      align='flex-start'
      minHeight='600px'
    >
      <Container display='flex' direction='column' margin='40px 0' width='98%'>
        <LazyLoad height={400}>
          <StyledImage src={photoUrl} width='inherit' height='410px' fit='cover'/>
        </LazyLoad>
        <SubHeader margin='20px 0 10px 0'>{name}</SubHeader>
        <Paragraph>{description}</Paragraph>
      </Container>
      <VenuesCard venue={venue}/>
    </Container>
  )

  return (
    <Layout>
      <SEO title={name} />
      <Ribbon color={secondaryColor}>“I have lived with several Zen masters – all of them cats.”</Ribbon>
      {renderContent()}
    </Layout>
  )
}

export default EventTemplate