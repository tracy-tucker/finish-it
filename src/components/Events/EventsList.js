import React, { useContext, useState, useEffect } from 'react'
import Event from './Event'
import AddForm from './AddForm'
import PageCount from '../PageCount'
import { EventContext } from '../../context/EventsContext'
import { Modal, Button, Alert } from 'react-bootstrap'

const EventsList = () => {

    const {events} = useContext(EventContext)
    console.log("I am after useContext")

    // Alert Comp
    const [showAlert, setShowAlert] = useState(false)
    // Modal Comp
    const [show, setShow] = useState(false)

    const handleShow = () => setShow(true)
    const handleClose = () => setShow(false)
    // const handleShowAlert = () => setShowAlert(true)

    const handleShowAlert = () => {
        setShowAlert(true);
        setTimeout(() => {
            setShowAlert(false)
        }, 2000)
    }

    // Closes modal on Add Event action
    // Triggers Alert on modal close
    useEffect(() => {
        handleClose()

        return () => {
            handleShowAlert()
            console.log("Is alert firing?")
        }
    }, [events])
    // [events] added so that the effect fires when events change

    console.log("I am about to pass events")

    // PageCount Comp
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage] = useState(1)

    const indexOfLastEvent = currentPage * eventsPerPage
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
    const currentEvent = events.slice(indexOfFirstEvent, indexOfLastEvent)
    const totalPagesNum = Math.ceil(events.length / eventsPerPage)

    return (
        <div className="EventsList">
            <div>
                <Button onClick={handleShow} className="btn btn-success" data-toggle="modal">Add New Event</Button>
            </div>

            <Alert className="Alert" show={showAlert} variant="success" dismissible>
                Event list updated successfully
            </Alert>

            <div>
                <ul className="EventItems">
                    {
                        currentEvent.sort((a, b) => (a.date < b.date ? -1 : 1)).map(event => (
                            <li key={event.id}>
                            <Event event={event}/>
                            </li>
                        ))
                    }
                </ul>
            </div>

            <PageCount className="PageCount"
                pages={totalPagesNum}
                setCurrentPage={setCurrentPage}
                currentEvent={events}
            />

            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
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
