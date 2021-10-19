import React, { useState, useContext } from 'react'
import { TaskContext } from '../../context/TasksContext'

const AddTask = () => {

    const {addTask} = useContext(TaskContext)

    const [text, setText] = useState("")


    const changeText = event => {
        setText(event.target.value)
    }

    const keydownText = event => {
        const isEnter = event.keyCode === 13
        const newText = text.trim()
        const isTextPresent = newText.length > 0;
        if (isEnter && isTextPresent) {
            console.log("keydownText", newText)
        }
    }

    return (
        <div>
            <input
                placeholder="What needs to be done"
                autoFocus
                value={text}
                onChange={changeText}
                onKeyDown={keydownText}
            />
        </div>
    )
}

export default AddTask
