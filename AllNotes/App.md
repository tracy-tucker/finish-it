To protect all routes from unauthenticated users, create a custom component, AuthenticatedRoute:
const AuthenticatedRoute = ({ component: C, ...props }) => {
  const { isAuthenticated } = useAuthState() -> Call the useAuth hook from Firebase.js to check if the user is authenticated. And then use this status to only render the components if the user is authenticated.

  const UnauthenticatedRoute = ({ component: C, ...props }) => -> Similar to the Authenticated component, except this component will only render if the user is NOT authenticated.