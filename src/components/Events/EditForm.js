import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { EventContext } from '../../context/EventsContext'


const EditForm = ({chosenEvent}) => {

    const id = chosenEvent.id

    console.log("I AM CHOSEN", chosenEvent)

    const {updateEvent} = useContext(EventContext)

    // THIS NEEDS TO CHANGE!
    const [updatedEvent, setUpdatedEvent] = useState({
        title: chosenEvent.title,
        date: chosenEvent.date,
        description: chosenEvent.description
    })

    // IS THIS CHANGING ALSO?
    const saveEvent = (e) => {
        e.preventDefault();
        updateEvent(id, updatedEvent)
    }

    return (
        <>
            <Form onSubmit={saveEvent}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Title *"
                        name="title"
                        value={updatedEvent.title}
                        onChange={(e) => setUpdatedEvent({...updatedEvent, title: e.target.value})}
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        type="date"
                        name="date"
                        value={updatedEvent.date}
                        onChange={(e) => setUpdatedEvent({...updatedEvent, date: e.target.value})}
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        name="description"
                        value={updatedEvent.description}
                        onChange={(e) => setUpdatedEvent({...updatedEvent, description: e.target.value})}
                        rows={3}
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Update Event
                </Button>
            </Form>
        </>
    )
}

export default EditForm