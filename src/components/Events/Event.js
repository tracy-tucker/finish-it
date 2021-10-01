import React, { useMemo } from 'react'

const Event = ({event}) => {
    const {key, title, date, description} = event
    console.log("I am inside the Event comp")

    return useMemo(() => {
        return (
            <div className="Event" key={key}>
                <h2>{title}</h2>
                <h3>{date}</h3>
                <p>{description}</p>
            </div>
        )
    }, [key, title, date, description])
    
}

export default Event
