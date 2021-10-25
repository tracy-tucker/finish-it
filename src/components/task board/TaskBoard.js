import React, { useState } from 'react'
import {InitialData} from './InitialData'
import Column from './Column'
import { DragDropContext } from 'react-beautiful-dnd';


const TaskBoard = () => {

    const [data, setData] = useState(InitialData)
    console.log(data)

    // const onDragEnd = result => {
    //     // TODO: Reorder the column
    // }

    // Result object properties. The info captured by the result object
    const onDragEnd = result => {
        const { destination, source, draggableId } = result
        
        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
            ) {
            return
        }

        const column = data.columns[source.droppableId]
        const newTaskIds = Array.from(column.taskIds)
        newTaskIds.splice(source.index, 1)
        newTaskIds.splice(destination.index, 0, draggableId)
        console.log(newTaskIds)

    }

    return (
        <DragDropContext
            // onDragStart
            // onDragUpdate
            onDragEnd={onDragEnd}
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


// Example result object
// const result = {
//     draggableId: 'task-1',
//     type: 'TYPE',
//     reason: 'DROP',
//     source: {
//         droppableId: 'column-1',
//         index: 0,
//     },
//     destination: {
//         droppableId: 'column-1',
//         index: 1,
//     },
// }