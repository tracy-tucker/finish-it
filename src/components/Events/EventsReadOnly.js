import React, { useContext } from 'react'
import { EventContext } from '../../context/EventsContext'

const EventsReadOnly = React.memo(() => {

    const {events} = useContext(EventContext)

    console.log("Read Only", events)

    return (
        <div>
            {events.map(event => (
                <ul key={event.id}>
                    <li>{event.title}</li>
                </ul>
            ))}
        </div>
    )
})

export default EventsReadOnly
