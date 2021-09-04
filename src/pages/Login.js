// import { useCallback } from 'react'
// import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

// export const Login = () => {
//   const handleSubmit = useCallback(async e => {
//     e.preventDefault()

//     const { email, password } = e.target.elements
//     const auth = getAuth()
//     try {
//       await signInWithEmailAndPassword(auth, email.value, password.value)
//     } catch (e) {
//       alert(e.message)
//     }
//   }, [])

//   return (
//     <>
//       <h1>Login</h1>
//       <form onSubmit={handleSubmit}>
//         <input name="email" placeholder="email" type="email" />
//         <input name="password" placeholder="password" type="password" />
//         <button type="submit">Login</button>
//       </form>
//     </>
//   )
// }

// Add a better message handling for user's experience.

import React, { useState, useContext } from 'react'
import { FirebaseContext } from '../context/FirebaseContext'
import '../components/styles.css'

const Login = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    // const { firebase } = useContext(FirebaseContext)

    return (
        <div className='container'>
            <h1>Log In!</h1>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    // firebase.auth().createUserWithEmailAndPassword(email, password)
                    // .then(() => alert("sign up!"))
                    // .catch((error) => alert(error.message))
                    // setEmail('')
                    // setPassword('')
                }}
            >
                <label>Enter your email</label>
                <input
                    type='email'
                    placeholder="email@email.com"
                    value={emailValue}
                    onChange={(event) => setEmailValue(event.target.value)}
                />
                <label>Enter your password</label>
                <input
                    type='password'
                    placeholder="Password"
                    value={passwordValue}
                    onChange={(event) => setPasswordValue(event.target.value)}
                />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Login