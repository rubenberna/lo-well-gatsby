import React, { useState, useEffect } from 'react'

import { actionsHub } from '../../../../services/hub'
import { Container } from '../../../styledComponents/containers'
import ControlsDashboard from '../../../molecules/controls/dashboard'
import ContentTable from '../../../molecules/table'
import EventForm from '../../forms/eventForm'
import TherapyForm from '../../forms/therapyForm'
import TherapistForm from '../../forms/therapistForm'
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
        return <EventForm 
          event={editableDoc} 
          closeForm={closeForm}
          typeOfAction={showForm}
          handleFormSubmission={handleDBQuery}/>
      case 'edit-therapies':
        return <TherapyForm 
          therapy={editableDoc} 
          closeForm={closeForm} 
          typeOfAction={showForm}
          therapists={therapists} 
          handleFormSubmission={handleDBQuery}/>
      case 'edit-about':
        return <TherapistForm 
          therapist={editableDoc} 
          typeOfAction={showForm}
          closeForm={closeForm} 
          handleFormSubmission={handleDBQuery}/>
      case 'create-events':
        return <EventForm 
          typeOfAction={showForm}
          closeForm={closeForm} 
          handleFormSubmission={handleDBQuery}/>
      case 'create-therapies':
        return <TherapyForm
          closeForm={closeForm}
          typeOfAction={showForm}
          therapists={therapists}
          handleFormSubmission={handleDBQuery} />
      case 'create-about':
        return <TherapistForm
          closeForm={closeForm}
          typeOfAction={showForm}
          handleFormSubmission={handleDBQuery} />
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