import React, { useState } from 'react'

import {
  DELETE_EVENT,
  DELETE_THERAPY,
  DELETE_THERAPIST
} from '../../../services/types'
import DeleteModal from '../../molecules/modal/delete'

const Delete = ({ obj, active, handleDelete }) => {
  const [show, setShow] = useState(false)

  const deleteObj = () => {
    let type = active === 'events' ? DELETE_EVENT :
        active === 'therapies' ? DELETE_THERAPY :
        active === 'about' ? DELETE_THERAPIST :
        undefined
      
    handleDelete({
      type,
      obj
    })
  }

  const renderForm = () => {
    if(obj) return (
      <>
        <div className="alert alert-danger" role="alert" onClick={() => setShow(!show)}>
          Delete {obj.name} ?
      </div>
        <DeleteModal show={show} obj={obj} setShow={setShow} deleteObj={deleteObj} />
      </>
    )
    else return ''
  }
  return renderForm()
}

export default Delete