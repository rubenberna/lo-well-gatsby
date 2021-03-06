import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Ribbon from '../components/molecules/ribbon'
import { secondaryColor } from '../components/styledComponents/variables'
import AboutBanner from '../components/organisms/banners/about'

const About = ({ data, location }) => {
  const { therapists } = data.therapists
  console.log(location);
  
  
  return(
    <Layout>
      <SEO title="About" />
      <Ribbon color={secondaryColor}>Wie zijn wij</Ribbon>
      <AboutBanner therapists={therapists}/>
    </Layout>
  )
}

export const therapistsQuery = graphql`
  query TherapistsQuery {
    therapists {
      therapists {
        name
        intro
        email
        phone
        photoUrl
      }
    }
  }
`

export default About