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

import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../components/styles.css'
import { DASHBOARD } from '../constants/routes'
import { useAuth } from '../context/AuthContext'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let history = useHistory();

    const auth = useAuth()

    return (
        <div className='container'>
            <h1>Sign Up</h1>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    auth.signup({
                        email,
                        password,
                        callback: () => history.push(DASHBOARD)
                    })
                    setEmail('')
                    setPassword('')
                }}
            >
                <label>Enter your email</label>
                <input
                    type='email'
                    placeholder="email@email.com"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />
                <label>Enter your password</label>
                <input
                    type='password'
                    placeholder="Password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                />
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
