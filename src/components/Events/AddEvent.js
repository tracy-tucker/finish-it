import React from 'react'
import { Form, Button } from 'react-bootstrap'

const AddEvent = () => {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Title *"
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        type="date"
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
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
