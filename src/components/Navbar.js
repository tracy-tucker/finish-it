import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'
import * as ROUTES from '../constants/routes'

function Navbar() {
    return (
        <div>
            <header className="Navbar">
                <Link to={ROUTES.HOME}><li>Home</li></Link>
                <Link to={ROUTES.SIGNUP}><li>Sign Up</li></Link> 
            </header>
        </div>
    )
}

export default Navbar
