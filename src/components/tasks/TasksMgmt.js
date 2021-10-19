import React from 'react'
import TasksList from './TasksList'
import TaskContextProvider from '../../context/TasksContext'

const EventsMgmt = () => {
    
    return (
        <div className="EventsMgmt">
            <h2>Manage Tasks</h2>
            <TaskContextProvider>
                <TasksList />
            </TaskContextProvider>
        </div>
    )
}

export default EventsMgmt
