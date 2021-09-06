import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { DASHBOARD } from '../constants/routes'
import '../components/styles.css'
import { useAuth } from '../context/AuthContext'

const Login = () => {
    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')
    const auth = useAuth();
    let history = useHistory()

    // const { firebase } = useContext(FirebaseContext)

    return (
        <div className='container'>
            <h1>Log In!</h1>
            <form onSubmit={(e) => {
                    e.preventDefault()
                    auth.signin({
                        email: emailValue,
                        password: passwordValue,
                        callback: () => history.push(DASHBOARD)
                    })
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