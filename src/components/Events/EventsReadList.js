import EventContextProvider from '../../context/EventsContext'
import EventsShow from './EventsShow'

const EventsReadOnly = () => {

    return (
        <div>
            {/* {events.map(event => (
                <ul key={event.id}>
                    <li>{event.title}</li>
                </ul>
            ))} */}
            <EventContextProvider>
                <EventsShow />
            </EventContextProvider>
        </div>
    )
}

export default EventsReadOnly
