// import { getAuth, signOut } from 'firebase/auth'
// import { useAuthState } from './firebase'

// export const Home = () => {
//   const { user } = useAuthState()

//   return (
//     <>
//       <h1>Welcome {user?.email}</h1>
//       <p>Hello?</p>
//       <button onClick={() => signOut(getAuth())}>Sign out</button>
//     </>
//   )
// }
import React from 'react'

const Home = () => {
    return (
        <div>
            <h1>Welcome home!</h1>
        </div>
    )
}

export default Home
