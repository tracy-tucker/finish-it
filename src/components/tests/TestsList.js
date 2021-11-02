import React, { useContext } from 'react'
import { TestContext } from '../../context/TestsContext'
import Test from './Test'

const TestsList = React.memo(() => {
    
    const { columns } = useContext(TestContext)
    
    console.log('coming in', columns)
    
    return (
        <div>
            <ul>
            {columns.map(column => (
                        <li key={column.id}>
                            <Test column={column} />
                        </li>
                    ))}
            </ul>
        </div>
    )
})

export default TestsList
