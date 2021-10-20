import React from 'react'

const Task = React.memo(({task}) => {

    return (
        <div>
            <h1>Manager's Tasks</h1>
            
            <div>
                <h3>TASK: {task.taskItem}</h3>
                <p>DUE DATE: {task.dueDate}</p>
                <p>PRIORITY: {task.priority}</p>
            </div>
        </div>
    )
})

export default Task
