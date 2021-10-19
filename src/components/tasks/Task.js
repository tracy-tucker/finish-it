import React from 'react'

const Task = React.memo(({task}) => {

    return (
        <div>
            <h1>Manager's Tasks</h1>
            
            <div>
                <h3>{task.taskItem}</h3>
                <p>{task.dueDate}</p>
            </div>
        </div>
    )
})

export default Task
