import React from 'react'
import EventsList from './EventsList'
import EventContextProvider from '../../context/EventsContext'

const EventsMgmt = () => {
    
    return (
        <div className="EventsMgmt">
            <h2>Manage Events</h2>
            <EventContextProvider>
                <EventsList />
            </EventContextProvider>
        </div>
    )
}

export default EventsMgmt
