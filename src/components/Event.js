import React from 'react'
import '../components/styles.css'

const Event = () => {
    
    const saveEvent = (event) => {
        event.preventDefault();
        const elementsArray = [...event.target.value]
        console.log(elementsArray);
    }

    return (
        <div className="EventContainer">
            <h1>Enter An Event</h1>
            <form onSubmit={saveEvent}>
                <label>Title</label>
                <input type="text" id="title" placeholder="Enter event name here" />
                <label>Date</label>
                <input type="date" id="date" />
                <label>Description</label>
                <textarea id="descrption"></textarea>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default Event

// The event input needs to be private to the manager only
