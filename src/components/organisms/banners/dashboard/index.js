import React, { useState, useEffect } from 'react'

import { Container } from '../../../styledComponents/containers'
import ControlsDashboard from '../../../molecules/controls/dashboard'
import ContentTable from '../../../molecules/table'

const Dashboard = ({ data }) => {
  const { events } = data.events
  const { therapies } = data.therapies
  const { therapists } = data.therapists

  const [active, setActive] = useState('events')
  const [tableContent, setTableContent] = useState(events)

  useEffect(() => {
    if(active === 'events') setTableContent(events)
    if(active === 'therapies') setTableContent(therapies)
    if(active === 'about') setTableContent(therapists)
  }, [active, events, therapists, therapies])
  
  
  return (
    <Container display='flex'>
      <ControlsDashboard active={active} setActive={setActive}/>
      <ContentTable data={tableContent}/>
    </Container>
  )
}

export default Dashboard