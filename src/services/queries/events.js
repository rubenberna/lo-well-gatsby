import { events } from '../firebase'
import { uploadPhoto } from '../hub'

// ------ EVENTS ------ //
export const createEvent = async (event) => { 
  event.photoUrl = await uploadPhoto(event.photo)
  delete event.photo
  delete event.id
  events.add({ ...event })
}

export const updateEvent = async (event) => {
  if (event.photo) {
    event.photoUrl = await uploadPhoto(event.photo)
  }  
  const eventRef = events.doc(event.id)
  eventRef.update({
    date: event.date,
    description: event.description,
    location: event.location,
    name: event.name,
    photoUrl: event.photoUrl,
    price: event.price,
    regular: event.regular,
    regularVenue: event.regularVenue || ''
  })
}

export const deleteEvent = async (event) => {  
  events.doc(event.id).delete()
  return 'Deleted'
}