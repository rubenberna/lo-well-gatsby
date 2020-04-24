import { therapies } from '../firebase'
import { uploadPhoto } from '../hub'

// ------ THERAPIES ------ //

export const createTherapy = async (therapy) => {
  therapy.photoUrl = await uploadPhoto(therapy.photo)
  delete therapy.photo
  delete therapy.id
  therapies.add({ ...therapy })
}

export const updateTherapy = async (therapy) => {
  if (therapy.photo) {
    therapy.photoUrl = await uploadPhoto(therapy.photo)
  }
  const therapyRef = therapies.doc(therapy.id)
  therapyRef.update({
    heading: therapy.heading,
    paragraphs: therapy.paragraphs,
    name: therapy.name,
    photoUrl: therapy.photoUrl,
    price: therapy.price,
    slug: therapy.slug,
    therapists: therapy.therapists
  })
}

export const deleteTherapy = async (therapy) => {
  therapies.doc(therapy.id).delete()
  return 'Deleted'
}