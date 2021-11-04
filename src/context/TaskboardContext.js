import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const TaskboardContext = createContext();

const TaskboardContextProvider = (props) => {

    const [loading, setLoading] = useState(true)
    const [tasks, setTasks] = useState([])
    const [columns, setColumns] = useState([])
    const [columnOrder, setColumnOrder] = useState([])

    useEffect(() => {
        const subscriber = db
        .collection('tasks').onSnapshot(querySnapshot => {
            setTasks(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end setTasks
        }) // END collection call

        setLoading(false)
        return () => subscriber()
        
    }, []) // END useEffect

    useEffect(() => {
        const subscriber = db
        .collection('columns').onSnapshot(querySnapshot => {
            setColumns(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end setColumns
        }) // end collection call
        return () => subscriber()
    }, [])

    useEffect(() => {
        const subscriber = db
        .collection('columnOrder').onSnapshot(querySnapshot => {
            setColumnOrder(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end setColumnOrder
        }) // end collection call
        return () => subscriber()
    }, [])

    if (loading) {
        return <h1>Loading data...</h1>
    }

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
        <TaskboardContext.Provider value={{tasks, columns, columnOrder, addTask}}>
            {props.children}
        </TaskboardContext.Provider>
    )
}

export default TaskboardContextProvider
