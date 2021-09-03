// import React, { useState, useEffect } from 'react'
// import { db } from './firebase'

// export const Profile = () => {

//     const [books, setBooks] = useState([])
    
//     useEffect(() => {
//         const getBooksFromFirestore = [];
//         const books = db.collection('books').onSnapshot((querySnapshot) => {
//             querySnapshot.forEach(doc => {
//                 getBooksFromFirestore.push({
//                     ...doc.data(),
//                     key: doc.id,
//                 });
//             });
//             setBooks(getBooksFromFirestore);
//         });
//         return () => books();
//     })
    
//     return (
//         <div>
//         <p>{books.map(data => ('Title: ' + data.title + 'Genre: ' + data.genre + ''))}</p>
//         <p>Hello?</p>
//         </div>
//     )
// }
