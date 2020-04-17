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
      return createEvent(payload)
    case UPDATE_EVENT:
      return updateEvent(payload)
    case DELETE_EVENT:      
      return deleteEvent(payload)
    case CREATE_THERAPY:
      return createTherapy(payload)
    case UPDATE_THERAPY:
      return updateTherapy(payload)
    case DELETE_THERAPY:
      return deleteTherapy(payload)
    case CREATE_THERAPIST:
      return createTherapist(payload)
    case UPDATE_THERAPIST:
      return updateTherapist(payload)
    default:
      break;
  }
}

export const uploadPhoto = async photo => {
  const imageRef = storageRef.child(photo.name)
  const upload = await imageRef.put(photo)
  const url = await upload.ref.getDownloadURL()
  return url
}