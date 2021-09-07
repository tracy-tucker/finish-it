import Firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCH09L4i49i-xi6ZBF6ps5GscgNOTfXabM",
    authDomain: "grindstone-c0642.firebaseapp.com",
    projectId: "grindstone-c0642",
    storageBucket: "grindstone-c0642.appspot.com",
    messagingSenderId: "488452110279",
    appId: "1:488452110279:web:c38ca051cbc653b36e8be2",
    measurementId: "G-QH72MGPVLK"
  };

const firebase = Firebase.initializeApp(firebaseConfig)

const db = firebase.firestore();

export { firebase, db };