import React, { useState, useEffect } from 'react'

import { actionsHub } from '../../../../services/hub'
import { Container } from '../../../styledComponents/containers'
import ControlsDashboard from '../../../molecules/controls/dashboard'
import ContentTable from '../../../molecules/table'
import EditEvent from '../../forms/editEvent'
import EditTherapy from '../../forms/editTherapy'
import EditTherapist from '../../forms/editTherapist'
import DeleteForm from '../../forms/delete'

const Dashboard = ({ data, addTimer }) => {
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
  
  const handleEditSelection = async ({formName, doc}) => {  
    setShowForm('')
    setEditableDoc('')  
    setShowForm(formName)
    setEditableDoc(doc)
  }

  const handleDBQuery = ({type, obj}) => {
    actionsHub({
      type,
      payload: obj
    })
    addTimer(75)
    setShowForm('')
    setEditableDoc('') 
  }

  const handleControlsSelection = (name) => {
    setActive(name)
    setShowForm('')
    setEditableDoc('')
  }

  const closeForm = () => {
    setShowForm('')
    setEditableDoc('')
  }

  const renderForm = () => {
    switch (showForm) {
      case 'edit-events':
        return <EditEvent 
          event={editableDoc} 
          closeForm={closeForm}
          handleEdit={handleDBQuery}/>
      case 'edit-therapies':
        return <EditTherapy 
          therapy={editableDoc} 
          closeForm={closeForm} 
          therapists={therapists} 
          handleEdit={handleDBQuery}/>
      case 'edit-about':
        return <EditTherapist 
          therapist={editableDoc} 
          closeForm={closeForm} 
          handleEdit={handleDBQuery}/>
      default:
        break;
    }
  }

  const renderDelete = () => {
    if(showForm) return <DeleteForm obj={editableDoc} active={active} handleDelete={handleDBQuery}/>
  }
  
  return (
    <Container display='flex'>
      <ControlsDashboard active={active} setActive={handleControlsSelection}/>
      <ContentTable 
        data={tableContent}
        active={active}
        formIsVisible={showForm}
        editableDoc={editableDoc}
        handleEditSelection={handleEditSelection}/>
        <Container width='67%'>
        { renderForm() }
        { renderDelete() }
        </Container>
    </Container>
  )
}

export default Dashboard