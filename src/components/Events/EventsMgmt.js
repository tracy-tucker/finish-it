// import React, { useState, useEffect } from 'react'
// import React, { useContext, useState, useEffect } from 'react'
// import { Modal, Button, Alert } from 'react-bootstrap'
import React from 'react'
import EventsList from './EventsList'
import EventContextProvider from '../../context/EventsContext'
// import { db } from '../firebase/config'
// import EventInput from './EventInput'
// import { Link } from 'react-router-dom'

const EventsMgmt = () => {
    
    // to set a loading message for the user
    // const [loading, setLoading] = useState(true)
    // const [events, setEvents] = useState([]);

    // const [showAlert, setShowAlert] = useState(false);
    // const [showModal, setShowModal] = useState(false);

    // useEffect(() => {
    //     const getEventsFromFirebase = [];
    //     const subscriber = db
    //         .collection('events')
    //         .onSnapshot((querySnapshot) => {
    //         querySnapshot.forEach(doc => {
    //             getEventsFromFirebase.push({
    //                 ...doc.data(),
    //                 key: doc.id,
    //             })
    //         })
    //         setEvents(getEventsFromFirebase)
    //         setLoading(false)
    //     })

        // useEffect cleanup function
//         return () => subscriber();
//     }, [events])

//     if (loading) {
//         return <h1>Loading data...</h1>
//     }

//     const handleShow = () => setShowModal(true)
//     const handleClose = () => setShowModal(false)

//     const deleteEvent = (event) => {
//         console.log(event)
//         db.collection('events').doc(event).delete().then(() =>{
//             console.log("Document successfully deleted!");
//         }).catch((error) => {
//             console.error("Error removing document: ", error)
//         })
//     }

//     return (
//         <div className="EventsList">
//             <h1>EVENTS</h1>
//             <Button onClick={handleShow} data-toggle="modal">ADD EVENT</Button>
//             {events.length > 0 ? (
//                 events.map(event =>
//                 <div key={event.key}>
//                     <h2>TITLE: {event.title}</h2>
//                     <h3>DATE: {event.date}</h3>
//                     <p>DETAILS: {event.description}</p>
//                     <Button>EDIT EVENT</Button> <br/>
//                     <Button onClick={() => deleteEvent(event.key)}>DELETE EVENT</Button>
//                 </div>)
//             ) : (
//                 <h1>No Events Yet</h1>
//             )}

//             <Modal show={showModal}>
//                 Testing?
//                 <EventInput />
//             </Modal>         
//         </div>
//     )
// }

    return (
        <div className="EventsMgmt">
            <h2>Manage Events</h2>
            <EventContextProvider>
                <EventsList />
            </EventContextProvider>
        </div>
    )
}

export default EventsMgmt
