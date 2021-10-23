import React, { useState } from 'react'
import {InitialData} from './InitialData'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd';


const TaskBoard = () => {

    const [data] = useState(InitialData)
    console.log(data)

    onDragEnd = result => {
        // TODO: Reorder the column
    }

    return (
        <DragDropContext
            onDragStart
            onDragUpdate
            onDragEnd
        >
            {data.columnOrder.map(columnId => {
                const column = data.columns[columnId]
                const tasks = column.taskIds.map(taskId => data.tasks[taskId])
                
                return <Column key={column.id} column={column} tasks={tasks} />
            })}
        </DragDropContext>
    )
}

export default TaskBoard

// DragDropContext has 3 callbacks
// onDragStart - called when the drag starts
// onDragUpdate - called when something changes during the drag
// onDragEnd - called at the end of the drag
// onDragEnd - Only required context. It synchronously updates your state to reflect the drag and drop result
