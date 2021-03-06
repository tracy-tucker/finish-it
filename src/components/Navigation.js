import React from 'react'
// import { Link } from 'react-router-dom'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import './styles.css'
import * as ROUTES from '../constants/routes'
import { useAuth } from '../context/AuthContext'

function Navigation() {
    const auth = useAuth();
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand>
                    <LinkContainer to={ROUTES.HOME}>
                        <Nav.Link>HOME</Nav.Link>
                    </LinkContainer>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto Navar">
                        {auth.user ? (
                            <>
                                <LinkContainer to={ROUTES.PROFILE}>
                                    <Nav.Link>Manage Profile</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={ROUTES.DASHBOARD}>
                                    <Nav.Link>Go to Dashboard</Nav.Link>
                                </LinkContainer>
                                <Nav.Link>
                                <li onClick={() => auth.signout()}>Sign Out</li>
                                </Nav.Link>
                            </>
                        ): (
                            <>
                                <LinkContainer to={ROUTES.LOGIN}>
                                    <Nav.Link>Log In</Nav.Link>
                                </LinkContainer>
                            </>
                        )}
                            
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className="Navbar">
        //     <header>
        //         <Link to={ROUTES.HOME}><li>Home</li></Link>
        //         {auth.user ? (
        //             <>
        //                 <Link to={ROUTES.PROFILE}><li>Manage Profile</li></Link>
        //                 <Link to={ROUTES.DASHBOARD}><li>Go to Dashboard</li></Link>
        //                 <li onClick={() => auth.signout()}>Sign Out</li>
        //             </>
        //         ): (
        //             <>
        //                 <Link to={ROUTES.LOGIN}><li>Log In</li></Link> 
        //                 <Link to={ROUTES.SIGNUP}><li>Sign Up</li></Link>
        //             </>
        //         )}
                 
        //     </header>
        // </div>
    )
}

export default Navigation
