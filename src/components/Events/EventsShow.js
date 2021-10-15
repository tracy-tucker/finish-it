import React, { useContext, useState } from 'react'
import { EventContext } from '../../context/EventsContext'
import PageCount from '../PageCount'


const EventsShow = () => {

    const {events} = useContext(EventContext)

    console.log("EventsShow", events)

    // PageCount Comp
    const [currentPage, setCurrentPage] = useState(1)
    const [eventsPerPage] = useState(1)

    const indexOfLastEvent = currentPage * eventsPerPage
    const indexOfFirstEvent = indexOfLastEvent - eventsPerPage
    const currentEvent = events.slice(indexOfFirstEvent, indexOfLastEvent)
    const totalEvents = Math.ceil(events.length / eventsPerPage)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div>
            <div>
                {currentEvent.map(event => (
                    <div key={event.id}>
                        <h2>{event.title}</h2>
                        <h3>{event.date}</h3>
                        <p>{event.description}</p>
                    </div>
                ))}
            </div>
            <div>
                <PageCount className="PageCount"
                    eventsPerPage = {eventsPerPage}
                    totalEvents = {totalEvents}
                    paginate = {paginate}
                />
            </div>
        </div>
    )
}

export default EventsShow
