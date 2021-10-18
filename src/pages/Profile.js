import React from 'react'
import EventsMgmt from '../components/events/EventsMgmt'
import Task from '../components/tasks/Task'

const Profile = () => {
    return (
        <div>
            <p>PROFILE PAGE</p>
            <EventsMgmt />
            <Task />
        </div>
    )
}

export default Profile

// If manager profile, show events input