import React from 'react'
import EventsMgmt from '../components/events/EventsMgmt'
// import ColumnsMgmt from '../components/Mgmt/ColumnsMgmt'
import TaskBoard from '../components/taskboard/TaskBoard'
import TasksMgmt from '../components/Mgmt/TasksMgmt'
// import TestsMgmt from '../components/tests/TestsMgmt'
// import TasksMgmt from '../components/tasks/TasksMgmt'

const Profile = () => {
    return (
        <div>
            <p>PROFILE PAGE</p>
            <EventsMgmt />
            {/* <ColumnsMgmt /> */}
            <TasksMgmt />
            {/* <TaskBoard /> */}
            {/* <TestsMgmt /> */}
        </div>
    )
}

export default Profile

// If manager profile, show events input