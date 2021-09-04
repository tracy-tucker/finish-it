// import { useCallback } from 'react'
// import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

// export const SignUp = () => {
//   const handleSubmit = useCallback(async e => {
//     e.preventDefault()

//     const { email, password } = e.target.elements
//     const auth = getAuth()
//     try {
//       await createUserWithEmailAndPassword(auth, email.value, password.value)
//     } catch (e) {
//       alert(e.message)
//     }
//   }, [])

//   return (
//     <>
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <input name="email" placeholder="email" type="email" />
//         <input name="password" placeholder="password" type="password" />
//         <button type="submit">Sign Up</button>
//       </form>
//     </>
//   )
// }

import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import './styles.css'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { firebase } = useContext(FirebaseContext)

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(() => alert("sign up!"))
                    .catch((error) => alert(error.message))
                    setEmail('')
                    setPassword('')
                }}
            >
                <label>Enter your email</label>
                <input
                    type='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Enter your password</label>
                <input
                    type='password'
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
