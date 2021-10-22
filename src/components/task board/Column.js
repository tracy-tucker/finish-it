import React from 'react'
import styled from 'styled-components'

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

const Column = ({column}) => {
    return (
        <Container>
            <Title>{column.title}</Title>
            <TaskList>Tasks go here</TaskList>
        </Container>
    )
}

export default Column
