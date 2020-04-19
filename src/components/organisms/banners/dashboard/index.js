import React, { useState, useEffect } from 'react'

import { actionsHub } from '../../../../services/hub'
import {
  DELETE_EVENT,
  DELETE_THERAPY,
} from '../../../../services/types'
import { Container } from '../../../styledComponents/containers'
import ControlsDashboard from '../../../molecules/controls/dashboard'
import ContentTable from '../../../molecules/table'
import EditEvent from '../../../molecules/forms/editEvent'
import EditTherapy from '../../../molecules/forms/editTherapy'

const Dashboard = ({ data }) => {
  const { events } = data.events
  const { therapies } = data.therapies
  const { therapists } = data.therapists

  const [active, setActive] = useState('events')
  const [tableContent, setTableContent] = useState(events)
  const [showForm, setShowForm] = useState('')
  const [editableDoc, setEditableDoc] = useState('')

  
  useEffect(() => {
    if (active === 'events') setTableContent(events)
    if (active === 'therapies') setTableContent(therapies)
    if (active === 'about') setTableContent(therapists)
  }, [active, events, therapists, therapies])
  
  const handleEdit = ({formName, doc}) => {
    setShowForm(formName)
    setEditableDoc(doc)
  }

  const handleDelete = (obj) => {
    let type = active === 'events' ? DELETE_EVENT : DELETE_THERAPY

    actionsHub({
      type,
      payload: obj
    })
  }

  const renderForm = () => {
    switch (showForm) {
      case 'edit-events':
        return <EditEvent event={editableDoc}/>
      case 'edit-therapies':
        return <EditTherapy therapy={editableDoc}/>
      default:
        break;
    }
  }
  
  return (
    <Container display='flex'>
      <ControlsDashboard active={active} setActive={setActive}/>
      <ContentTable 
        data={tableContent}
        active={active}
        handleDelete={handleDelete} 
        handleEdit={handleEdit}/>
      {renderForm() }
    </Container>
  )
}

export default Dashboard