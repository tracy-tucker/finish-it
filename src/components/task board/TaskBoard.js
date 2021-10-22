import React, { useState } from 'react'
import {InitialData} from './InitialData'
import Column from './Column'

const TaskBoard = () => {

    const [data, setData] = useState(InitialData)
    console.log(data)

    return (
        <div>
            {data.columnOrder.map(columnId => {
                const column = data.columns[columnId]
                const tasks = column.taskIds.map(taskId => data.tasks[taskId])
                
                return <Column key={column.id} column={column} tasks={tasks} />
            })}
        </div>
    )
}

export default TaskBoard
