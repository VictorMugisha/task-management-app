import React, { useState } from 'react'
import { nanoid } from 'nanoid'
import "../otherStyles/NewTask.css"

export default function NewTask() {
    const [taskFormData, setTaskFormData] = useState({
        taskId: nanoid(),
        taskTitle: '',
        taskCategory: '',
        dueDate: '',
        isComplete: false,
    })

    function handleChange(event) {
        const { name, value } = event.target
        setTaskFormData(prevData => ({
            ...prevData,
            [name]: value
        }))

    }
    console.log(taskFormData)
    return (
        <section className="new-task-container">
            <h2 className="title">Create New Task</h2>
            <form>
                <div className="input">
                    <p>Enter Task Title</p>
                    <input
                        type="text"
                        placeholder="Task Title"
                        name="taskTitle"
                        value={taskFormData.taskTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <p>Selece Task Category</p>
                    <select
                        name="taskCategory"
                        value={taskFormData.taskCategory}
                        onChange={handleChange}
                    >
                        <option value="" disabled selected>--Choose--</option>
                        <option value="Personal">Personal</option>
                        <option value="Work">Work</option>
                        <option value="Study">Study</option>
                        <option value="Custom">Custom</option>
                    </select>
                </div>
                <div className="input">
                    <p>Enter Task Due Date</p>
                    <input
                        type="date"
                        name="dueDate"
                        value={taskFormData.dueDate}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="create-task-button"
                >
                    Add Task
                </button>
            </form>
        </section>
    )
}
