import React from 'react'
import EventsMgmt from '../components/events/EventsMgmt'
import TaskBoard from '../components/task board/TaskBoard'
import TestsMgmt from '../components/tests/TestsMgmt'
// import TasksMgmt from '../components/tasks/TasksMgmt'

const Profile = () => {
    return (
        <div>
            <p>PROFILE PAGE</p>
            <EventsMgmt />
            {/* <TasksMgmt /> */}
            <TaskBoard />
            <TestsMgmt />
        </div>
    )
}

export default Profile

// If manager profile, show events input