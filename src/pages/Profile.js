import React from 'react'
import EventsMgmt from '../components/events/EventsMgmt'
import TasksMgmt from '../components/tasks/TasksMgmt'

const Profile = () => {
    return (
        <div>
            <p>PROFILE PAGE</p>
            <EventsMgmt />
            <TasksMgmt />
        </div>
    )
}

export default Profile

// If manager profile, show events input