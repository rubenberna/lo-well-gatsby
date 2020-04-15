import React from "react"
import { graphql } from 'gatsby'
import moment from 'moment'

import AgendaBanner from '../components/organisms/banners/agenda'
import Ribbon from '../components/molecules/ribbon'
import { secondaryColor } from '../components/styledComponents/variables'
import Layout from "../components/layout"
import SEO from "../components/seo"

const Agenda = ({ data }) => {

  const { events } = data.events
  // Only future or regular events
  const filteredEvents = events.filter( ev => (moment(ev.date).format() >= moment().format()) || (ev.regular))
  const eventsList = filteredEvents.map((ev, i) => <AgendaBanner key={ev.id} event={ev} number={i} last={filteredEvents.length}/>)
  
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
        id
        location
        name
        photoUrl
        regular
        regularVenue {
          location
          weekdays
        }
        price
      }
    }
  }
`

export default Agenda
