import React from 'react'
import ColumnContextProvider from '../../context/ColumnsContext'
import TaskBoard from '../taskboard/TaskBoard'

const ColumnsMgmt = () => {
    return (
        <div>
            <ColumnContextProvider>
                <TaskBoard />
            </ColumnContextProvider>
        </div>
    )
}

export default ColumnsMgmt
