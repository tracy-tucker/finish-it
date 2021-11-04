import React, { useContext } from 'react'
// import {InitialData} from './InitialData'
import { TaskboardContext } from '../../context/TaskboardContext'
import Column from './Column'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
`

const TaskBoard = () => {

    const {tasks, columns, columnOrder} = useContext(TaskboardContext)
    // const [data, setData] = useState(InitialData)
    

    // console.log('columnOrder', columnOrder)

    const onDragStart = () => {
        document.body.style.color='#EEE'
    }

    // Result object properties. The info captured by the result object
    const onDragEnd = result => {
        document.body.style.color='inherit'
        const { destination, source, draggableId, type } = result
        
        if (!destination) {
            return
        }

        if (destination.droppableId === source.droppableId &&
            destination.index === source.index
            ) {
            return
        }

        // Moving columns horizontally
        if (type === 'column') {
            const newColumnOrder = Array.from(tasks.columnOrder)
            newColumnOrder.splice(source.index, 1)
            newColumnOrder.splice(destination.index, 0, draggableId)
            console.log("NEW ORDER", newColumnOrder)

            // setData({
            //     ...data,
            //     columnOrder: newColumnOrder
            // })
            return
        }

        // Moving task order
        const start = tasks.columns[source.droppableId]
        const finish = tasks.columns[destination.droppableId]

        if (start === finish) {
            const newTaskIds = Array.from(start.taskIds)
            newTaskIds.splice(source.index, 1)
            newTaskIds.splice(destination.index, 0, draggableId)
            console.log(newTaskIds)

            const newColumn = {
                ...start,
                taskIds: newTaskIds,
            }
            
            // setData({
            //     ...data,
            //     columns: {
            //         ...data.columns,
            //         [newColumn.id]: newColumn
            //     }
            // })
            return
        }

        // Moving from one list to another
        const startTaskIds = Array.from(start.taskIds)
        startTaskIds.splice(source.index, 1)
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        }

        const finishTaskIds = Array.from(finish.taskIds)
        finishTaskIds.splice(destination.index, 0, draggableId)
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds
        }

        // setData({
        //     ...data,
        //     columns: {
        //         ...data.columns,
        //         [newStart.id]: newStart,
        //         [newFinish.id]: newFinish
        //     }
        // })
        return
    }

    return (
        <DragDropContext
            onDragStart={onDragStart}
            // onDragUpdate
            onDragEnd={onDragEnd}
        >
            <Droppable
                droppableId="all-columns"
                direction="horizontal"
                type="column"
            >
                {provided => (
                    <Container
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        <ul>
                            {tasks.map(task => (
                                <li key={task.id}>{task.content}</li>
                            ))}
                        </ul>

                        {/* {columnOrder.map((columnId, index) => {
                            const column = columns[columnId]
                            const tasks = column.taskIds.map(taskId => tasks[taskId])
                            
                            return (
                                <Column
                                    key={column.id}
                                    column={column}
                                    tasks={tasks}
                                    index={index}
                                />
                            )
                        })} */}
                        {provided.placeholder}
                    </Container>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default TaskBoard


// DragDropContext has 3 callbacks
// onDragStart - called when the drag starts
// onDragUpdate - called when something changes during the drag
// onDragEnd - called at the end of the drag
// onDragEnd - Only required context. It synchronously updates your state to reflect the drag and drop result


// Example result object moving tasks within same column
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

// Changing the color of a draggable/droppable is acceptable
// Do not change dimensions!

// Example data from object

// onDragStart
// const start ={
//     draggableId: 'task-1',
//     type: 'TYPE',
//     source: {
//         droppableId: 'column-1',
//         index: 0,
//     },
// }

// onDragUpdate
// const update = {
//     ...start,
//     destination: {
//         droppableId: 'column-1',
//         index: 1,
//     },
// }

// onDragEnd
// const result = {
//     ...update,
//     reason: 'DROP',
// }

// LEFT TO DO:
// input to add tasks
// integrate with Firestore
// add priority checkbox