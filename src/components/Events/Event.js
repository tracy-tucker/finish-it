import React, { useContext, useState, useEffect } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { EventContext } from '../../context/EventsContext'
import EditForm from './EditForm'

const Event = React.memo(({event}) => {
    // const {key, title, date, description} = event
    console.log("I am inside the Event comp")

    const {deleteEvent} = useContext(EventContext)

    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    // Closes modal on Add Event action
    useEffect(() => {
        handleClose()
    }, [event])
    // [events] added so that the effect fires when events change

    return (
        <div className="Event" key={event.id}>
            <h2>{event.title}</h2>
            <h3>{event.date}</h3>
            <p>{event.description}</p>
            <Button onClick={() => deleteEvent(event.id)} className="btn btn-danger">DELETE</Button>
            <Button onClick={handleShow} className="btn btn-primary">EDIT</Button>

            <Modal show={show} onHide={handleClose} animation={false}>
            <Modal.Header>
                <Modal.Title>
                    Edit Event
                </Modal.Title>
            </Modal.Header>
                <Modal.Body>
                    <EditForm chosenEvent={event} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    ) 
})

export default Event
