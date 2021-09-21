import React from 'react'

const Event = ({event}) => {
    
    return (
        <div className="Event">
            <h2>{event.title}</h2>
            <h3>{event.date}</h3>
            <p>{event.description}</p>
        </div>
    )
}

export default Event
