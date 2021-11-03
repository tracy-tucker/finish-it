import React, { createContext, useState, useEffect } from 'react'
import { db } from '../firebase/config'

export const ColumnContext = createContext();

const ColumnContextProvider = (props) => {

    const [columns, setColumns] = useState([])

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

    return (
        <ColumnContext.Provider value={{columns}}>
            {props.children}
        </ColumnContext.Provider>
    )
}

export default ColumnContextProvider
