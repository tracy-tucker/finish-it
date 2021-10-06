import React, { useContext, useState, useEffect } from 'react'
import Event from './Event'
import AddForm from './AddForm'
import { EventContext } from '../../context/EventsContext'
import { Modal, Button } from 'react-bootstrap'

const EventsList = () => {

    const {events} = useContext(EventContext)
    console.log("I am after useContext")
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)

    // Closes modal on Add Event action
    useEffect(() => {
        handleClose()
    }, [events])
    // [events] added so that the effect fires when events change

    console.log("I am about to pass events")

    return (
        <div className="EventsList">
            <div>
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">Add New Event</Button>
            </div>
            <div>
            <ul>
                {
                    events.sort((a, b) => (a.date < b.date ? -1 : 1)).map(event => (
                        <li key={event.id}>
                        <Event event={event}/>
                        </li>
                    ))
                }
            </ul>
            </div>
            
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header>
                    <Modal.Title>
                        Add Event
                    </Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <AddForm />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                    </Modal.Footer>
            </Modal>
        </div>
    )
}

export default EventsList


// event.description is the only piece not appearing
// The initial "description" created within Firestore appears
// But none of the form-created descriptions appear
