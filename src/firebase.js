import firebase from 'firebase'

// Initialize access to Firebase
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCH09L4i49i-xi6ZBF6ps5GscgNOTfXabM",
  authDomain: "grindstone-c0642.firebaseapp.com",
  projectId: "grindstone-c0642",
  storageBucket: "grindstone-c0642.appspot.com",
  messagingSenderId: "488452110279",
  appId: "1:488452110279:web:c38ca051cbc653b36e8be2",
  measurementId: "G-QH72MGPVLK"
});

///// Initialize access to Firestore /////
const db = firebaseApp.firestore()

///// Initialize access to Firebase Authentication /////
const auth = firebase.auth()

export { db, auth }