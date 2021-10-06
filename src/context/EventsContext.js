import React, { useState, useEffect, createContext } from 'react'
import { db } from '../firebase/config'

export const EventContext = createContext();

const EventContextProvider = (props) => {
    
    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([]);
    
    useEffect(() => {
        const subscriber = db
        .collection('events').onSnapshot(querySnapshot => {
            setEvents(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end setEvents
        }) // END collection call
        setLoading(false)
        return () => subscriber()
    }, []) // END useEffect
    
    console.log("I am right outside useEffect", events)


    if (loading) {
        return <h1>Loading data...</h1>
    }

    const addEvent = (event) => {
        db.collection('events').add(event)
        .then(() => {
            console.log("Document successfully written!")
            // setEvents(events => [...events, event])
            // setEvents([...events])
        })
        .catch((error) => {
            console.error("Error writing document: ", error)
        })   
    }

    const deleteEvent = (id) => {
        db.collection('events').doc(id).delete()
    }
    
    const updateEvent = (id, updatedEvent) => {
        db.collection('events').doc(id).update({
            title: updatedEvent.title,
            date: updatedEvent.date,
            description: updatedEvent.description
        })
        console.log(id, "I AM THE UPDATE")
    }

    return (
        <EventContext.Provider value={{events, addEvent, deleteEvent, updateEvent}}>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider
