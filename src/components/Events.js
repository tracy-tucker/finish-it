import React, { useState, useEffect } from 'react'
import { db } from '../firebase/config'

const Events = () => {

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
                setEvents(getEventsFromFirebase)
                setLoading(false)
            })
        })
        return () => subscriber();
    }, [])

    if (loading) {
        return <h1>Loading data...</h1>
    }

    return (
        <div>
            <h1>EVENTS</h1>
            {events.length > 0 ? (
                events.map(event => <div key={event.key}>{event.title}</div>)
            ) : (
                <h1>No Events Yet</h1>
            )}            
        </div>
    )
}

export default Events

// A list of Events should appear on the dashboard for ALL signed-in employees to see.
