import React, { useState } from 'react'

import {
  DELETE_EVENT,
  DELETE_THERAPY,
  DELETE_THERAPIST
} from '../../../services/types'
import DeleteModal from '../modal/delete'

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

  return (
    <>
      <div class="alert alert-danger" role="alert" onClick={() => setShow(!show) }>
        Delete {obj.name} ?
      </div>
      <DeleteModal show={show} obj={obj} setShow={setShow} deleteObj={deleteObj}/>
    </>
  )
}

export default Delete