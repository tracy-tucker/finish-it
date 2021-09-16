import React, { useState } from 'react'
import { db } from '../firebase/config'
import '../components/styles.css'

const EventInput = () => {

    const [formData, setFormData] = useState({
        title: "",
        date: "",
        description: ""
    })
    
    const saveEvent = (event) => {
        event.preventDefault();
        
        const elementsArray = [...event.target.elements];

        const formData = elementsArray.reduce((accumulator, currentValue) => {
            if (currentValue.id) {
                accumulator[currentValue.id] = currentValue.value;
            }
            return accumulator
        }, {});
        db.collection('events').add(formData);
    }

    return (
        <>
            <div className="EventContainer">
                <h1>Enter An Event</h1>
                <form onSubmit={saveEvent}>
                    <label>Title</label>
                        <input
                        onChange={e => setFormData({...formData, title: e.target.value})}
                        value={formData.title}
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Enter event name here"
                        />
                    <label>Date</label>
                        <input
                        onChange={e => setFormData({...formData, date: e.target.value})}
                        value={formData.date}
                        type="date"
                        id="date"
                        name="date"
                        />
                    <label>Description</label>
                    <textarea
                    onChange={e => setFormData({...formData, description: e.target.value})}
                    value={formData.description}
                    name="description"
                    placeholder="Enter event details here"
                    id="descrption"></textarea>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </>
    )
}

export default EventInput

// The event input needs to be private to the manager only
// video left off at 9:41
