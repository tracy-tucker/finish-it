import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import '../components/styles.css'
import { PROFILE } from '../constants/routes'
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
                        callback: () => history.push(PROFILE)
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
