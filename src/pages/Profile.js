import React from 'react'
import EventsMgmt from '../components/events/EventsMgmt'
import TaskboardMgmt from '../components/Mgmt/TaskboardMgmt'
// import TestsMgmt from '../components/tests/TestsMgmt'
// import TasksMgmt from '../components/tasks/TasksMgmt'

const Profile = () => {
    return (
        <div>
            <p>PROFILE PAGE</p>
            <EventsMgmt />
            {/* <ColumnsMgmt /> */}
            <TaskboardMgmt />
            {/* <TaskBoard /> */}
            {/* <TestsMgmt /> */}
        </div>
    )
}

export default Profile

// If manager profile, show events input