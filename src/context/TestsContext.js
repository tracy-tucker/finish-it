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
            }))) // end setEvents
        }) // END collection call
        
        return () => subscriber()
    }, []) // END useEffect

    return (
        <TestContext.Provider value={{tasks}}>
            {props.children}
        </TestContext.Provider>
    )
}

export default TestContextProvider