import React, { useState, useEffect } from 'react'

// import { actionsHub } from '../../../../services/hub'
// import {
//   UPDATE_EVENT,
//   DELETE_EVENT,
//   UPDATE_THERAPY,
//   DELETE_THERAPY,
//   UPDATE_THERAPIST
// } from '../../../../services/types'
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
    if (active === 'events') setTableContent(events)
    if (active === 'therapies') setTableContent(therapies)
    if (active === 'about') setTableContent(therapists)
  }, [active, events, therapists, therapies])
  
  const handleEdit = (obj) => {
    // let type = active === 'events' ? UPDATE_EVENT
    //   : active === 'therapies' ? UPDATE_THERAPY
    //     : UPDATE_THERAPIST

    // actionsHub({
    //   type,
    //   payload: obj
    // })
  }

  const handleDelete = (obj) => {
    // let type = active === 'events' ? DELETE_EVENT : DELETE_THERAPY

    // actionsHub({
    //   type,
    //   payload: obj
    // })
  }
  
  return (
    <Container display='flex'>
      <ControlsDashboard active={active} setActive={setActive}/>
      <ContentTable 
        data={tableContent}
        active={active}
        handleDelete={handleDelete} 
        handleEdit={handleEdit}/>
    </Container>
  )
}

export default Dashboard