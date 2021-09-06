import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import * as ROUTES from '../constants/routes'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const auth = useAuth();
    return (
        <div>
            <header className="Navbar">
                <Link to={ROUTES.HOME}><li>Home</li></Link>
                {auth.user ? (
                    <>
                        <Link to={ROUTES.PROFILE}><li>Manage Profile</li></Link>
                        <Link to={ROUTES.DASHBOARD}><li>Go to Dashboard</li></Link>
                        <li onClick={() => auth.signout()}>Sign Out</li>
                    </>
                ): (
                    <>
                        <Link to={ROUTES.LOGIN}><li>Log In</li></Link> 
                        <Link to={ROUTES.SIGNUP}><li>Sign Up</li></Link>
                    </>
                )}
                 
            </header>
        </div>
    )
}

export default Navbar
