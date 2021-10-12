import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import * as ROUTES from './constants/routes'
import Hero from './components/Hero'
import Navigation from './components/Navigation'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import PrivateRoute from './components/PrivateRoute'
import { useAuth } from './context/AuthContext'

function App() {
  const { isLoading } = useAuth();
  return (
    isLoading ? (
      <h1>Loading...</h1>
    ) : (
      <Router>
        <Navigation />
        <Hero />
        <Switch>
          <Route exact path={ROUTES.HOME} component={Home} />
          <Route path={ROUTES.SIGNUP} component={SignUp} />
          <Route path={ROUTES.LOGIN} component={Login} />
          <PrivateRoute>
            <Route path={ROUTES.PROFILE} component={Profile} />
            <Route path={ROUTES.DASHBOARD} component={Dashboard} />
          </PrivateRoute>
          
        </Switch>
      </Router>
    )
  )
}

export default App
