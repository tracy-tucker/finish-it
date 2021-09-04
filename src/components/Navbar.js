import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function Navbar() {
    return (
        <div>
            <header className="Navbar">
                <Link to='/'><li>Home</li></Link>
                <Link to='/profile'><li>Profile</li></Link> 
            </header>
        </div>
    )
}

export default Navbar
