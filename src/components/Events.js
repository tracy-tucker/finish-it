import React, { useState, useEffect } from 'react'
import { db } from '../firebase/config'

const Events = () => {

    const [events, setEvents] = useState([]);
    return (
        <div>
            <h1>EVENTS</h1>
            <p>... list of events</p>
            {storedEvents.map((event) => {
                <p>{event.title}</p>
            })}
            
        </div>
    )
}

export default Events

// A list of Events should appear on the dashboard for ALL signed-in employees to see.
