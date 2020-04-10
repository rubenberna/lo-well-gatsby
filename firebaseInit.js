const firebase = require('firebase')
const firebaseConfig = require('./firebaseConfig')
firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

// Shortcuts for db collections
const events = db.collection('events')

module.exports = {
  events,
}