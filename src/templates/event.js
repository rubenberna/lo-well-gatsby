import React from 'react'

import SEO from "../components/seo"
import Layout from '../components/layout'
import Ribbon from '../components/molecules/ribbon'
import { Container } from '../components/styledComponents/containers'
import { secondaryColor } from '../components/styledComponents/variables'

const EventTemplate = ({ pageContext }) => {

  console.log(pageContext);
  
  const {
    name
  } = pageContext

  const renderContent = () => (
    <Container
      margin='0 auto'
      maxWidth='960px'
      padding='0 1.0875rem 1.45rem'
    >
      {name}
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