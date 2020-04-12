import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Ribbon from '../components/molecules/ribbon'
import { secondaryColor } from '../components/styledComponents/variables'
import AboutBanner from '../components/organisms/banners/about'

const About = ({ data }) => {
  const { therapists } = data.therapists
  
  return(
    <Layout>
      <SEO title="About" />
      <Ribbon color={secondaryColor}>Wie zijn wij</Ribbon>
      <div className='container'>
        <AboutBanner therapists={therapists}/>
      </div>
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