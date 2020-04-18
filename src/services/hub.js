import { storageRef } from './firebase'
import {
  createEvent,
  updateEvent,
  deleteEvent
} from './queries/events'
import {
  createTherapy,
  updateTherapy,
  deleteTherapy
} from './queries/therapies'
import {
  createTherapist,
  updateTherapist
} from './queries/therapists'

import {
  CREATE_EVENT,
  UPDATE_EVENT,
  DELETE_EVENT,
  CREATE_THERAPY,
  UPDATE_THERAPY,
  DELETE_THERAPY,
  CREATE_THERAPIST,
  UPDATE_THERAPIST
} from './types'


export const actionsHub = ({type, payload}) => {
  if (!type) throw new Error('Please include a type')
  
  switch (type) {
    case CREATE_EVENT:
      createEvent(payload)
      return rebuildData()
    case UPDATE_EVENT:
      updateEvent(payload)
      return rebuildData()
    case DELETE_EVENT:      
      deleteEvent(payload)
      return rebuildData()
    case CREATE_THERAPY:
      createTherapy(payload)
      return rebuildData()
    case UPDATE_THERAPY:
      updateTherapy(payload)
      return rebuildData()
    case DELETE_THERAPY:
      deleteTherapy(payload)
      return rebuildData()
    case CREATE_THERAPIST:
      createTherapist(payload)
      return rebuildData()
    case UPDATE_THERAPIST:
      updateTherapist(payload)
      return rebuildData()
    default:
      break;
  }
}

const rebuildData = () => {
  let env = process.env.NODE_ENV
  console.log(env);
  
  if (env === 'development') return fetch('http://localhost:8000/__refresh', { method: 'POST'})

  else return fetch('https://api.netlify.com/build_hooks/5e9b2461b6c58b5b9755da1f', { method: 'POST'})
}

export const uploadPhoto = async photo => {
  const imageRef = storageRef.child(photo.name)
  const upload = await imageRef.put(photo)
  const url = await upload.ref.getDownloadURL()
  return url
}