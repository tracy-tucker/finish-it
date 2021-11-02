import React from 'react'
import TaskContextProvider from '../../context/TasksContext'
import TaskBoard from '../task board/TaskBoard'

const TasksMgmt = () => {
    
    return (
        <div className="EventsMgmt">
            <h2>Manage Tasks</h2>
            <TaskContextProvider>
                <TaskBoard />
            </TaskContextProvider>
        </div>
    )
}

export default TasksMgmt
