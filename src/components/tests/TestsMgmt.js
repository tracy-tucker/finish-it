import React from 'react'
import TestsList from './TestsList'
import TestContextProvider from '../../context/TestsContext'

const TestsMgmt = () => {
    return (
        <TestContextProvider>
            <TestsList />
        </TestContextProvider>
    )
}

export default TestsMgmt
