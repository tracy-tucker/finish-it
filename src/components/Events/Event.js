import React from 'react'

const Event = React.memo(({event}) => {
    // const {key, title, date, description} = event
    console.log("I am inside the Event comp")

    // return useMemo(() => {
        return (
            <div className="Event" key={event.key}>
                <h2>{event.title}</h2>
                <h3>{event.date}</h3>
                <p>{event.description}</p>
            </div>
        )
    // }, [key, title, date, description])
    
})

export default Event
