import React, { useState, useEffect } from 'react'
import { db } from '../firebase/config'

const EventsRaw = () => {
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
    }, [])

    if (loading) {
        return <h1>Loading data...</h1>
    }

    return (
        <div>
            <h1>EVENTS</h1>
            {events.length > 0 ? (
                events.map(event =>
                <div key={event.key}>
                    <h1>{event.title}</h1>
                    <h3>{event.date}</h3>
                    <p>{event.description}</p>
                </div>)
            ) : (
                <h1>No Events Yet</h1>
            )}            
        </div>
    )
}

export default EventsRaw
