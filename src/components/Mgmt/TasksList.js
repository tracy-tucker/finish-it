import React, { useContext } from 'react'
import { TaskContext } from '../../context/TasksContext'
import AddTask from './AddTask'
import Task from './Task'

const TasksList = React.memo(() => {
    
    const {tasks} = useContext(TaskContext)
    
    console.log('Task List', tasks)

    return (
        <div>
            <div>
                <AddTask />
            </div>
            <div>
                <h1>Manager's Tasks</h1>
            </div>
            <div>
                <ul>
                    {tasks.map(task => (
                        <li key={task.id}>
                            <Task task={task} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
})

export default TasksList
