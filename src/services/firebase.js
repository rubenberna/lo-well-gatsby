import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import configValues from './firebaseConfig'

const lazy = (fn) => {
  let isLoaded = false
  let result
  return () => {
    if (!isLoaded) {
      isLoaded = true
      result = fn()
    }
    return result
  }
}
const firebaseApp = firebase.initializeApp(configValues)

const db = firebase.firestore()

const events = db.collection('events')
const therapies = db.collection('therapies')
const therapists = db.collection('therapists')
const storageRef = firebase.storage().ref('photos')

export {
  firebaseApp,
  events,
  therapies,
  therapists,
  storageRef
}