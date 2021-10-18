import React from 'react'
import EventsList from './EventsList'
import TaskContextProvider from '../../context/TasksContext'

const EventsMgmt = () => {
    
    return (
        <div className="EventsMgmt">
            <h2>Manage Events</h2>
            <TaskContextProvider>
                <EventsList />
            </TaskContextProvider>
        </div>
    )
}

export default EventsMgmt
