import React, { useState, useEffect, createContext } from 'react'
import { db } from '../firebase/config'

export const EventContext = createContext();

const EventContextProvider = (props) => {
    
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

    return (
        <EventContext.Provider value={{events}}>
            {props.children}
        </EventContext.Provider>
    )
}

export default EventContextProvider

// const EventsContext = () => {

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
//     }, [events])

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

// export default EventsContext