import React, { useState, useEffect } from 'react'
import { db } from '../firebase/config'
import { Link } from 'react-router-dom'

const EventsRaw = ({ match }) => {
    const { path } = match;
    // to set a loading message for the user
    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const getEventsFromFirebase = [];
        const subscriber = db
            .collection('events')
            .onSnapshot((querySnapshot) => {
            querySnapshot.forEach(doc => {
                getEventsFromFirebase.push({
                    ...doc.data(),
                    key: doc.id,
                })
            })
            setEvents(getEventsFromFirebase)
            setLoading(false)
        })

        // useEffect cleanup function
        return () => subscriber();
    }, [events])

    if (loading) {
        return <h1>Loading data...</h1>
    }

    const deleteEvent = (event) => {
        console.log(event)
        db.collection('events').doc(event).delete().then(() =>{
            console.log("Document successfully deleted!");
        }).catch((error) => {
            console.error("Error removing document: ", error)
        })
    }

    return (
        <div className="EventsList">
            <h1>EVENTS</h1>
            <Link to={`${path}/add`}></Link>
            {events.length > 0 ? (
                events.map(event =>
                <div key={event.key}>
                    <h2>TITLE: {event.title}</h2>
                    <h3>DATE: {event.date}</h3>
                    <p>DETAILS: {event.description}</p>
                    <button>EDIT EVENT</button> <br/>
                    <button onClick={() => deleteEvent(event.key)}>DELETE EVENT</button>
                </div>)
            ) : (
                <h1>No Events Yet</h1>
            )}            
        </div>
    )
}

export default EventsRaw
