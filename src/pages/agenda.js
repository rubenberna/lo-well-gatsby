import React from "react"
import { graphql } from 'gatsby'

import AgendaBanner from '../components/organisms/banners/agenda'
import Ribbon from '../components/molecules/ribbon'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Agenda = ({ data }) => {

  const { events } = data.events
  const eventsList = events.map((ev, i) => <AgendaBanner key={i} event={ev} number={i}/>)

  
  return (
    <Layout>
      <SEO title="Agenda" />
      <Ribbon>Check what's comming next</Ribbon>
      {eventsList} 
    </Layout>
  )
}

export const eventsQuery = graphql`
  query MyQuery {
    events {
      events {
        date
        description
        location
        name
        photoUrl
      }
    }
  }
`

export default Agenda
