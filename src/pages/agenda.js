import React from "react"
import { graphql } from 'gatsby'

import AgendaBanner from '../components/organisms/banners/agenda'
import Ribbon from '../components/molecules/ribbon'
import { secondaryColor } from '../components/styledComponents/variables'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Agenda = ({ data }) => {

  const { events } = data.events
  const eventsList = events.map((ev, i) => <AgendaBanner key={i} event={ev} number={i} last={events.length}/>)
  
  return (
    <Layout>
      <SEO title="Agenda" />
      <Ribbon color={secondaryColor}>Check what's comming next</Ribbon>
      {eventsList} 
    </Layout>
  )
}

export const eventsQuery = graphql`
  query AgendaQuery {
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
