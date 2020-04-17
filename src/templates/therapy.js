import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Header, SubHeader, Paragraph } from '../components/styledComponents/typography'
import Ribbon from '../components/molecules/ribbon'
import { Container, Paralax } from '../components/styledComponents/containers'
import { secondaryColor } from '../components/styledComponents/variables'
import { Link } from 'gatsby'

const TherapyTemplate = ({ pageContext }) => {
  const {
    name,
    heading,
    paragraphs,
    photoUrl,
    therapists
  } = pageContext

  const renderParagraphs = paragraphs.map((p, i) => <Paragraph key={i}>{p}</Paragraph>)

  const renderTherapists = () => {
    if (therapists.length > 1)
      return <span>{therapists[0]} en {therapists[1]}</span>
    else return <span>{therapists}</span>
  }
  
  return (
    <Layout>
      <SEO title={name} />
      <Ribbon color={secondaryColor}>“I have lived with several Zen masters – all of them cats.”</Ribbon>
      <Container
        margin='0 auto'
        maxWidth='960px'
        padding='0 1.0875rem 1.45rem'
      >
        <Container height='440px'>
          <Container position='relative'>
            <Paralax 
              url={photoUrl} 
              width='100%'
              height='350px'
              position='absolute'
              display='flex'
              justify='center'
              align='center'
              direction='column'
              >
              <SubHeader color='#fff' opacity='0.8'>{name}</SubHeader>
              <Header color='#fff' weight='600'>{heading}</Header>
            </Paralax>
          </Container>
        </Container>
        <Container width='100%'>
          {renderParagraphs}
        </Container>
        <Link to='/about' state={{ active: 'contact' }}>
          <Paragraph weight='600'>Therapists: {renderTherapists()}</Paragraph>
        </Link>
      </Container>
    </Layout>
  )
}

export default TherapyTemplate