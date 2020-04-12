const firebase = require('firebase')
const firebaseConfig = require('./firebaseConfig')
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

// Shortcuts for db collections
const events = db.collection('events')
const therapies = db.collection('therapies')

module.exports = {
  events,
  therapies
}