import React, { useContext } from 'react'
import { TestContext } from '../../context/TestsContext'
import Test from './Test'

const TestsList = React.memo(() => {
    
    const { tasks } = useContext(TestContext)
    
    console.log('coming in', tasks)
    
    return (
        <div>
            <ul>
            {tasks.map(task => (
                        <li key={task.id}>
                            <Test task={task} />
                        </li>
                    ))}
            </ul>
        </div>
    )
})

export default TestsList
