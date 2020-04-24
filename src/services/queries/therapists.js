import { therapists } from '../firebase'
import { uploadPhoto } from '../hub'

// ------ THERAPISTS ------ //

export const createTherapist = async (therapist) => {
  therapist.photoUrl = await uploadPhoto(therapist.photo)
  delete therapist.photo
  delete therapist.id
  therapists.add({ ...therapist })
}

export const updateTherapist = async (therapist) => {
  if (therapist.photo) {
    therapist.photoUrl = await uploadPhoto(therapist.photo)
  }
  const therapistRef = therapists.doc(therapist.id)
  therapistRef.update({
    email: therapist.email,
    intro: therapist.intro,
    name: therapist.name,
    phone: therapist.phone,
    photoUrl: therapist.photoUrl,
  })
}