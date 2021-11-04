import React from 'react'
import TaskboardContextProvider from '../../context/TaskboardContext'
import TaskBoard from '../taskboard/TaskBoard'

const TaskboardMgmt = () => {
    
    return (
        <div className="EventsMgmt">
            <h2>Manage Tasks</h2>
            <TaskboardContextProvider>
                <TaskBoard />
            </TaskboardContextProvider>
        </div>
    )
}

export default TaskboardMgmt
