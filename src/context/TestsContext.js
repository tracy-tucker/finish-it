import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const TestContext = createContext();

const TestContextProvider = (props) => {
    
    const [columns, setColumns] = useState([])

    useEffect(() => {
        const subscriber = db
        .collection('columnOrder').onSnapshot(querySnapshot => {
            setColumns(querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }))) // end setEvents
        }) // END collection call

        return () => subscriber()
    }, []) // END useEffect

    return (
        <TestContext.Provider value={{columns}}>
            {props.children}
        </TestContext.Provider>
    )
}

export default TestContextProvider