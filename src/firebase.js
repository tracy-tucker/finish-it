import { getAuth, onAuthStateChanged } from '@firebase/auth'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { useState, useEffect, useContext, createContext } from 'react'

export const firebaseApp = initializeApp({
  apiKey: "AIzaSyCH09L4i49i-xi6ZBF6ps5GscgNOTfXabM",
  authDomain: "grindstone-c0642.firebaseapp.com",
  projectId: "grindstone-c0642",
  storageBucket: "grindstone-c0642.appspot.com",
  messagingSenderId: "488452110279",
  appId: "1:488452110279:web:c38ca051cbc653b36e8be2",
  measurementId: "G-QH72MGPVLK"
})

// Holds the state of the current user signed in.
export const AuthContext = createContext()

export const AuthContextProvider = props => {
  const [user, setUser] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)
    return () => unsubscribe()
  }, [])
  return <AuthContext.Provider value={{ user, error }} {...props} />
}

export const useAuthState = () => {
  const auth = useContext(AuthContext)
  return { ...auth, isAuthenticated: auth.user != null }
}

const db = getFirestore()

export { db }