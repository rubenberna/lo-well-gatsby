import React from "react"
import { graphql } from 'gatsby'
import moment from 'moment'

import SEO from "../components/seo"
import Layout from "../components/layout"
import AgendaBanner from '../components/organisms/banners/agenda'
import Ribbon from '../components/molecules/ribbon'
import { secondaryColor } from '../components/styledComponents/variables'
import Calendar from '../components/organisms/banners/calendar'

const Agenda = ({ data }) => {

  const { events } = data.events
  const irregularEvents = events.filter( ev => (moment(ev.date).format() >= moment().format()) && !ev.regular)
  const regularEvents = events.filter(ev => ev.regular)

  const ascEvents = irregularEvents.sort((a,b) => (a.date > b.date) ? 1 : -1)
  const finalList = [...regularEvents, ...ascEvents]

  const eventsList = finalList.map((ev, i) => <AgendaBanner key={ev.id} event={ev} number={i} last={finalList.length}/>)
  
  return (
    <Layout>
      <SEO title="Agenda" />
      <Ribbon color={secondaryColor}>Check what's comming next</Ribbon>
      <Calendar events={events}/>
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
        slug
        regularVenue {
          location
          weekdays
          time
        }
        price
      }
    }
  }
`

export default Agenda
