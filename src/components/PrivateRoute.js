import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { SIGNUP} from '../constants/routes'

const PrivateRoute = ({ children, ...rest }) => {
    let auth = useAuth();
    return (
      <Route
        {...rest}
        render={({ location }) =>
          auth.user ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: SIGNUP,
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute