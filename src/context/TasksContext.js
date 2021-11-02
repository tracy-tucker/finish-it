import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const TaskContext = createContext();

const TaskContextProvider = (props) => {

    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        const subscriber = db
        .collection('tasks').onSnapshot(querySnapshot => {
            setTasks(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end setEvents
        }) // END collection call

        setLoading(false)
        return () => subscriber()
        
    }, []) // END useEffect

    if (loading) {
        return <h1>Loading data...</h1>
    }

    useEffect(() => {
        const subscriber2 = db
        .collection('columns').onSnapshot(querySnapshot => {
            setTasks(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end setEvents
        }) // END collection call

        setLoading(false)
        return () => subscriber2()
        
    }, []) // END useEffect

    const addTask = (task) => {
        db.collection('tasks').add(task)
        .then(() => {
            console.log("Document successfully written!")
        })
        .catch((error) => {
            console.error("Error writing document: ", error)
        })   
    }

    return (
        <TaskContext.Provider value={{tasks, columns, addTask}}>
            {props.children}
        </TaskContext.Provider>
    )
}

export default TaskContextProvider
