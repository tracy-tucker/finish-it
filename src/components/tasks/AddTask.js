import React, { useState, useContext } from 'react'
import { Form, Button } from 'react-bootstrap'
import { TaskContext } from '../../context/TasksContext'

const AddTask = () => {

    const {addTask} = useContext(TaskContext)

    const [taskData, setTaskData] = useState({
        taskItem: "",
        dueDate: "",
        priority: "",
        completed: false
    })

    const saveTask = (e) => {
        e.preventDefault();
        addTask(taskData)
    }

    // const keydownText = event => {
    //     const isEnter = event.keyCode === 13
    //     const newText = text.trim()
    //     const isTextPresent = newText.length > 0;
    //     if (isEnter && isTextPresent) {
    //         console.log("keydownText", newText)
    //     }
    // }

    return (
        <>
            <Form onSubmit={saveTask}>
                <Form.Group>
                    <Form.Control
                        type="text"
                        placeholder="Task *"
                        name="task"
                        value={taskData.taskItem}
                        onChange={e => setTaskData({...taskData, taskItem: e.target.value})}
                        required
                    >
                    </Form.Control>
                    <Form.Control
                        type="date"
                        name="dueDate"
                        value={taskData.dueDate}
                        onChange={e => setTaskData({...taskData, dueDate: e.target.value})}
                        required
                    >
                    </Form.Control>
                    <Form.Select aria-label="priority selection"
                        value={taskData.priority}
                        onChange={e => setTaskData({...taskData, priority: e.target.value})}
                        >
                        <option>Low</option>
                        <option>Medium</option>
                        <option>High</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="success" type="submit" block>
                    Add Task
                </Button>
            </Form>
        </>
    )
}

export default AddTask


// const [taskData, setTaskData] = useState({
//     taskItem: "",
//     dueDate: "",
//     description: ""
// })

// const saveTask = (e) => {
//     e.preventDefault();
//     addTask(formData)
// }

// return (
//     <>
//         <Form onSubmit={saveTask}>
//             <Form.Group>
//                 <Form.Control
//                     type="text"
//                     placeholder="Title *"
//                     name="title"
//                     value={formData.title}
//                     onChange={e => setFormData({...formData, title: e.target.value})}
//                     required
//                 >
//                 </Form.Control>
//                 <Form.Control
//                     type="date"
//                     name="date"
//                     value={formData.date}
//                     onChange={e => setFormData({...formData, date: e.target.value})}
//                     required
//                 >
//                 </Form.Control>
//                 <Form.Control
//                     as="textarea"
//                     placeholder="Description"
//                     name="description"
//                     value={formData.description}
//                     onChange={e => setFormData({...formData, description: e.target.value})}
//                     rows={3}
//                 >
//                 </Form.Control>
//             </Form.Group>
//             <Button variant="success" type="submit" block>
//                 Add Event
//             </Button>
//         </Form>
//     </>
// )