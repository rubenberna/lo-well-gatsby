import React, { useState } from 'react'

const EditEvent = ({event}) => {
  console.log('event Edit: ', event);

  // const handleEdit = (obj) => {
  //   let type = active === 'events' ? UPDATE_EVENT
  //     : active === 'therapies' ? UPDATE_THERAPY
  //       : UPDATE_THERAPIST

  //   actionsHub({
  //     type,
  //     payload: obj
  //   })
  // }
  

  const renderForm = () => {
    return <h1>{event.name}</h1>
  }

  return renderForm()

}
export default EditEvent