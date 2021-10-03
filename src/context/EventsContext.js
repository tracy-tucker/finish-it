import React, { useState, useEffect, createContext } from 'react'
import { db } from '../firebase/config'

export const EventContext = createContext();

const EventContextProvider = (props) => {
    
    const [loading, setLoading] = useState(true)
    const [events, setEvents] = useState([]);
    // const [newEvents, setNewEvents] = useState(...events)
    
    // useEffect(() => {
    //     const subscriber = db
    //     .collection('events').onSnapshot(querySnapshot => {
    //         setEvents(querySnapshot.docs.map(doc => doc.data()))
    //     })
    //     setLoading(false)
    //     return () => subscriber()
        
    // }, [])

    useEffect(() => {
        console.log("I am before the Firestore fetch")
        if (events.length === 0) {
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
                console.log("I am after the Firestore Fetch, inside UseEffect")
            })

            // useEffect cleanup function
            return () => subscriber();
        }
    }, [events])

    console.log("I am right outside useEffect", events)

    // removed event. was eating up firestore data

    if (loading) {
        return <h1>Loading data...</h1>
    }

    const addEvent = (event) => {
        db.collection('events').add(event)
        .then(() => {
            console.log("Document successfully written!")
            // setEvents(events => [...events, event])
            console.log("am I working?")
        })
        .catch((error) => {
            console.error("Error writing document: ", error)
        })
        
        // console.log(events)

        // const elementsArray = [...event.target.elements];

        // const formData = elementsArray.reduce((accumulator, currentValue) => {
        //     if (currentValue.id) {
        //         accumulator[currentValue.id] = currentValue.value;
        //     }
        //     return accumulator
        // }, {});
        // db.collection('events').add(formData);
        // console.log(formData);
    }
    
    // const saveEvent = (event) => {
    //     event.preventDefault();
        
    //     const elementsArray = [...event.target.elements];

    //     const formData = elementsArray.reduce((accumulator, currentValue) => {
    //         if (currentValue.id) {
    //             accumulator[currentValue.id] = currentValue.value;
    //         }
    //         return accumulator
    //     }, {});
    //     db.collection('events').add(formData);
    //     console.log(formData);
    // }

    return (
        <EventContext.Provider value={{events, addEvent}}>
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
