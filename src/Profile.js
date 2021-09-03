import React, { useState } from 'react'
import { db } from './firebase'

function Profile() {

    const [books, setBooks] = useState([])
    
    db.collection('books').onSnapshot(function (querySnapshot) {
        const data = [];
        querySnapshot.forEach(doc => {
            console.log(doc.data().title)
            data.push({title: doc.data().title, genre: doc.data().genre})
        })
        setBooks(data);
    })
    
    return (
        <div>
        <p>{books.map(book => ('Title: ' + book.title + 'Genre: ' + book.genre + ''))}</p>
        </div>
    )
}

export default Profile
