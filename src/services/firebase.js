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
const firebaseApp = lazy(()=> firebase.initializeApp(configValues))
const auth = lazy(() => firebaseApp().auth())

const db = lazy(() => firebase.firestore())

const events = lazy(() => db.collection('events'))
const therapies = lazy(() => db.collection('therapies'))
const therapists = lazy(() => db.collection('therapists'))
const storageRef = lazy(() => firebase.storage().ref('photos'))

export {
  firebaseApp,
  auth,
  events,
  therapies,
  therapists,
  storageRef
}