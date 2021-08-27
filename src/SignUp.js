// import React, { useCallback } from 'react'
// import { withRouter } from 'react-router'
// import { auth }  from './firebase'

// const SignUp = ({ history }) => {
//     const handleSignUp = useCallback(async event => {
//         event.preventDefault();
//         const { email, password } = event.target.elements;
//         try {
//             await auth
//             .auth()
//             .createUserWithEmailAndPassword(email.value, password.value);
//             history.push("/");
//         } catch (error) {
//             alert(error);
//         }
//     }, [history]);

//     return (
//         <div>
//             <h1>Sign up to view this department's progress</h1>
//             <form onSubmit={handleSignUp}>
//                 <label>
//                     Email
//                     <input name="email" type="email" placeholder="Email goes here..." />
//                 </label>
//                 <label>
//                     Password
//                     <input name="password" type="password" placeholder="Password goes here..." />
//                 </label>
//                 <button type="submit">Sign Up</button>
//             </form>
//         </div>
//     );
// };

// export default withRouter(SignUp);

import React from 'react'

function help() {
    return (
        <div>
            
        </div>
    )
}

export default help
