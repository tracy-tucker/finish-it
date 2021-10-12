import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import './styles.css'
import * as ROUTES from '../constants/routes'
import { useAuth } from '../context/AuthContext'

function Navigation() {
    const auth = useAuth();
    return (
        <div className="Navbar">
            <header>
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

export default Navigation
