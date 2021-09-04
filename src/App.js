// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect
// } from 'react-router-dom'
// import { Home } from './Home'
// import { SignUp } from './SignUp'
// import { Profile } from './Profile'
// import { Login } from './Login'
// import { AuthContextProvider, useAuthState } from './firebase'

// const AuthenticatedRoute = ({ component: C, ...props }) => {
//   const { isAuthenticated } = useAuthState()
//   console.log(`AuthenticatedRoute: ${isAuthenticated}`)
//   return (
//     <Route
//       {...props}
//       render={routeProps =>
//         isAuthenticated ? <C {...routeProps} /> : <Redirect to="/login" />
//       }
//     />
//   )
// }

// const UnauthenticatedRoute = ({ component: C, ...props }) => {
//   const { isAuthenticated } = useAuthState()
//   console.log(`UnauthenticatedRoute: ${isAuthenticated}`)
//   return (
//     <Route
//       {...props}
//       render={routeProps =>
//         !isAuthenticated ? <C {...routeProps} /> : <Redirect to="/" />
//       }
//     />
//   )
// }

// function App() {
//   return (
//     <AuthContextProvider>
//       <Router>
//         <div>
//           <Link to="/">Home</Link> | <Link to="/profile">Profile</Link> | <Link to="/login">Login</Link> |{' '}
//           <Link to="/signup">SignUp</Link>
//         </div>
//         <AuthenticatedRoute exact path="/" component={Home} />
//         <AuthenticatedRoute exact path="/profile" component={Profile} />
//         <UnauthenticatedRoute exact path="/signup" component={SignUp} />
//         <UnauthenticatedRoute exact path="/login" component={Login} />
//       </Router>
//     </AuthContextProvider>
//   )
// }

// export default App

// Add "Loading" message

import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <div claaName="App">
      <Navbar />
    </div>
  )
}

export default App
