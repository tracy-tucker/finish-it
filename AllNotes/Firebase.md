const AuthContext = createContext() -> Holds the state of the current user signed in.
Context -> A tool that allows you to share props throughout the whole react component without having to pass it down by props.

const [user, setUser] = useState()
const [error, setError] = useState() -> Pass in the user state, which we can get from the onAuthStateChanged listener:
const unsubscribe = onAuthStateChanged(getAuth(), setUser, setError)

return () => unsubscribe() -> unsubscribe from the event when the component is unmounted.

export const AuthContextProvider = props => -> Initialize a context provider

return <AuthContext.Provider value={{ user, error }} {...props} -> Pass in our state as a value. Then we can access it anywhere by calling useContext with our context object.

export const useAuthState = () => -> Create the useAuthState function that returns the context of the current user logged in:
const auth = useContext(AuthContext)
return { ...auth, isAuthenticated: auth.user != null }
isAuthenticed makes is easier to know if the user is signed in.