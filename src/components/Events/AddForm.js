import React, { useContext, useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { EventContext } from '../../context/EventsContext'


const AddForm = () => {

    const {addEvent} = useContext(EventContext)

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: ""
    })

    const saveEvent = (e) => {
        e.preventDefault();
        addEvent(formData)
    }

    return (
        <>
            <Form onSubmit={saveEvent}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Title *"
                        name="title"
                        value={formData.title}
                        onChange={e => setFormData({...formData, title: e.target.value})}
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={e => setFormData({...formData, date: e.target.value})}
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        as="textarea"
                        placeholder="Description"
                        name="description"
                        value={formData.description}
                        onChange={e => setFormData({...formData, description: e.target.value})}
                        rows={3}
                    >
                    </Form.Control>
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Add Event
                </Button>
            </Form>
        </>
    )
}

export default AddForm
