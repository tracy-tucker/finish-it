import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const TestContext = createContext();

const TestContextProvider = (props) => {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const subscriber = db
        .collection('tasks').onSnapshot(querySnapshot => {
            setTasks(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end SetTasks
        }) // end collection call
        return () => subscriber()
    }, [])

    return (
        <TestContext.Provider value={tasks}>
            {props.children}
        </TestContext.Provider>
    )
}

export default TestContextProvider