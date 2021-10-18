import React, { useState } from 'react'

const Task = () => {
    const [text, setText] = useState("")

    const changeText = event => {
        setText(event.target.value)
    }

    const keydownText = event => {
        if (event.keyCode === 13) {
            console.log("keydownText", text)
        }
    }

    return (
        <div>
            <h1>Manager's Tasks</h1>
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

export default Task
