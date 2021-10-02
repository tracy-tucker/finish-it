// import React, { useState, useEffect } from 'react'
// import { db } from '../firebase/config'

import React, { useContext, useState, useEffect } from 'react'
import Event from './Event'
import AddForm from './AddForm'
import { EventContext } from '../../context/EventsContext'
import { Modal, Button } from 'react-bootstrap'

const EventsList = () => {

    const {events} = useContext(EventContext)
    console.log("I am after useContext")
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    //handleClose not working
    useEffect(() => {
        handleClose()
    }, [])

    console.log("I am about to pass events")

    return (
        <div className="EventsList">
            <div>
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">Add New Event</Button>
            </div>
            <div>
            <ul>
                {events.map(event => (
                    <li key={event.id}>
                    <Event event={event}/>
                    </li>
                ))}
                {/* <li>{events.title}</li> */}
            </ul>
            </div>
            
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>
                        Add Event
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <AddForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EventsList

// const EventsList = () => {

//     // to set a loading message for the user
//     const [loading, setLoading] = useState(true)

//     const [events, setEvents] = useState([]);

//     useEffect(() => {
//         const getEventsFromFirebase = [];
//         const subscriber = db
//             .collection('events')
//             .onSnapshot((querySnapshot) => {
//             querySnapshot.forEach(doc => {
//                 getEventsFromFirebase.push({
//                     ...doc.data(),
//                     key: doc.id,
//                 })
//             })
//             setEvents(getEventsFromFirebase)
//             setLoading(false)
//         })

//         // useEffect cleanup function
//         return () => subscriber();
//     }, [])

//     if (loading) {
//         return <h1>Loading data...</h1>
//     }

//     return (
//         <div className="EventsList">
//             <h1>EVENTS</h1>
//             {events.length > 0 ? (
//                 events.map(event =>
//                 <div key={event.key}>
//                     <h2>TITLE: {event.title}</h2>
//                     <h3>DATE: {event.date}</h3>
//                     <p>DETAILS: {event.description}</p>
//                 </div>)
//             ) : (
//                 <h1>No Events Yet</h1>
//             )}          
//         </div>
//     )
// }

// export default EventsList

// event.description is the only piece not appearing
// The initial "description" created within Firestore appears
// But none of the form-created descriptions appear
