import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddEvent = () => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placholder="Title *"
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        type="date"
                        placholder="Date *"
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        as="texareat"
                        placholder="Description *"
                        required
                        rows={3}
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Add Event
                </Button>
            </Form>
        </div>
    )
}

export default AddEvent
