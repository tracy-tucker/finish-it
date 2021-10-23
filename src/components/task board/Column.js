import React from 'react'
import styled from 'styled-components'
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const Container = styled.div`
margin: 8px;
border: 1px solid lightgray;
border-radius: 2px;
`;
const Title = styled.h3`
padding: 8px;
`;
const TaskList = styled.div`
padding: 8px;
`;

const Column = ({column, tasks}) => {
    return (
        <Container>
            <Title>{column.title}</Title>
            <Droppable droppableId={column.id}>
                {provided => (
                    <TaskList
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tasks.map((task, index) => (<Task key={task.id} task={task} index={index} />))}
                        {provided.placeholder}
                    </TaskList>
                )}
            </Droppable>
        </Container>
    )
}

export default Column

// Droppable has 1 required prop, droppableId
// droppableId needs to be unique within the drag drop context
// A droppable utilizes the render props pattern and expects
// its child to be a function that returns a react component

// The first argument to the function is called 'provided'
// Provided is an object with a few purposes

// Provided object has a property called 'droppableProps'
// DroppableProps are props that need to be applied
// to the component that you want to designate as your droppable
// You can 'spread' the provided object with the droppable property on to your component

// Provided object has a property called 'innerRef'
// innerRef a function used to supply the DOM node of your component to React Beautifl DND
// A styled component has a callback prop called innerRef, which returns the DOM node of the component
// You can assign the provided.innerRef function to this prop

// A placeholder is a React element that is used to increase the availalbe space in a droppable during a drag
// The placeholder needs to be added as a child of the component that you designate as the droppable

