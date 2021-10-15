import React from 'react'
import EventsReadList from '../components/events/EventsReadList'

const Dashboard = () => {
    
    const today = new Date().toLocaleDateString()

    console.log(today)

    return (
        <div>
            <h1>Welcome | FINISH IT Dashboard</h1>
            <p>TODAY'S DATE: {today}</p>
           <EventsReadList />
        </div>
    )
}

export default Dashboard
