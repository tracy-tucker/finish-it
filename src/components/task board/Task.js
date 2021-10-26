import React from 'react'
import styled from 'styled-components'
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
border: 1px solid lightgray;
border-radius: 2px;
padding: 8px;
margin-bottom: 8px;
`;

const Task = ({task, index}) => {
    return (
        <Draggable draggableId={task.id} index={index}>
            {(provided, snapshot) => (
                <Container
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    {task.content}
                </Container>
            )} 
        </Draggable> 
    )
}

export default Task

// Draggable has 2 required props: draggableId and index (required)

// The Task comp is bringing 'index' over from the Column comp
// The 2nd argument to a map function is the index of the item in the array
// The index can be passed on to the Task comp and used for the Draggable required index

// The Draggable expects its child to be a function, provided
// Provided object has a property called 'draggableProps'
// DraggableProps are props that need to be applied
// to the component that you want to designate as your draggable
// You can 'spread' the provided object with the draggable property on to your component

// Provided object has another property called 'dragHandleProps'
// dragHandleProps need to be applied to the part of the component that we want to use to be able to control the entire component
// You can use this to drag a large item by just a small part of it

// You also need to provide a ref to the draggable, as you did with the droppable
// innerRef a function used to supply the DOM node of your component to React Beautifl DND

// Snapshot is an object that contains a number of properties that let you style your draggable comp

// Example Draggable Snapshot
// const draggableSnapshot = {
//     isDragging: true,
//     draggingOver: 'column-1',
// }

// Example Droppable Snapshot
// const droppableSnapshot = {
//     isDraggingOver: true,
//     draggingOverWith: 'task-1',
// }