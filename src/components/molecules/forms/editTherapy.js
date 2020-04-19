import React, { useState } from 'react'

const EditTherapy = ({therapy}) => {
  console.log('therapy Edit: ', therapy);

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
    return <h1>{therapy.name}</h1>
  }

  return renderForm()

}
export default EditTherapy