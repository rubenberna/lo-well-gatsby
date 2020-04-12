import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/layout'
import { Header, SubHeader, Paragraph } from '../components/styledComponents/typography'
import { Container, Paralax } from '../components/styledComponents/containers'

const TherapyTemplate = ({ pageContext }) => {
  console.log(pageContext);
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
      <SEO title="Therapies" />
      <Container padding='40px 190px' margin='0 auto'>
        <Container height='440px'>
          <Container position='relative'>
            <Paralax 
              url={photoUrl} 
              width='60%'
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
            <Container 
              height='350px' 
              width='60%' 
              position='absolute'
              zIndex='-999'
              top='45px'
              left='40px'
              background='#bdbdbd'/>
          </Container>
        </Container>
        <Container width='70%'>
          {renderParagraphs}
        </Container>
        <Paragraph weight='600'>Therapists: {renderTherapists()}</Paragraph>
      </Container>
    </Layout>
  )
}

export default TherapyTemplate