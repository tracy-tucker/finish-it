import React, { useContext } from 'react'
import { TaskContext } from '../../context/TasksContext'

const TasksList = React.memo(() => {
    
    const {tasks} = useContext(TaskContext)
    console.log('Task List', tasks)

    return (
        <div>
            testing
        </div>
    )
})

export default TasksList
