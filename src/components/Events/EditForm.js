import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { EventContext } from '../../context/EventsContext'


const EditForm = () => {

    const {updateEvent} = useContext(EventContext)

    // THIS NEEDS TO CHANGE!
    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: ""
    })

    // IS THIS CHANGING ALSO?
    const saveEvent = (e) => {
        e.preventDefault();
        updateEvent(formData)
    }

    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Title *"
                        name="title"
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        type="date"
                        name="date"
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        name="description"
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