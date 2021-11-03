import React from 'react'

const Task = React.memo(({task}) => {

    return (
        <div>
            <input
            />
            <h3>TASK: {task.content}</h3>
            {/* <p>DUE DATE: {task.dueDate}</p>
            <p>PRIORITY: {task.priority}</p> */}
        </div>
    )
})

export default Task
