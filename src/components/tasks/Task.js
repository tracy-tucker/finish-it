import React, { useState, useContext } from 'react'
// import { TaskContext } from '../../context/TasksContext'

const Task = () => {

    // const {tasks} = useContext(TaskContext)

    // console.log(tasks)

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
            <h1>Manager's Tasks</h1>
            <input
                placeholder="What needs to be done"
                autoFocus
                value={text}
                onChange={changeText}
                onKeyDown={keydownText}
            />
            {/* <ul>
                {tasks.map(task => (
                    <li key={task.id}>{task.taskItem}</li>
                ))}
                
            </ul> */}
        </div>
    )
}

export default Task
