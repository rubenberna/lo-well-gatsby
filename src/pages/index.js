import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeBanner from '../components/organisms/banners/home/index'
import HomeBannerTwo from '../components/organisms/banners/homeTwo'

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <HomeBanner/>
    <HomeBannerTwo data={data}/>
  </Layout>
)

export const allProducts = graphql`
  query allProducts {
    therapies {
      therapies {
        photoUrl
        name
        intro
        slug
      }
    }
    events {
      events {
        name
        photoUrl
        intro
        slug
      }
    }
  }
`

export default IndexPage
