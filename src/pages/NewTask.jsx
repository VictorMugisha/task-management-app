import React, { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import "../otherStyles/NewTask.css"
import useLocalStorage from '../hooks/useLocalStorage'

export default function NewTask() {
    const [taskFormData, setTaskFormData] = useState({
        taskId: nanoid(),
        taskTitle: '',
        taskCategory: '',
        dueDate: '',
        isComplete: false,
    })

    const [savedCategories, setSavedCategories] = useState([])

    useEffect(() => {
        const possibleCategories = useLocalStorage("allCategories")
        setSavedCategories(possibleCategories)
    }, [])

    function handleChange(event) {
        const { name, value } = event.target
        setTaskFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function validateFormInput(event) {
        event.preventDefault()
        if (taskFormData.taskTitle == "") {
            alert("Form Title is Required!!")
            return
        }

        if (taskFormData.taskCategory == "") {
            taskFormData.taskCategory = "Custom"
        }

        // alert(JSON.stringify(taskFormData))

        const dataAlreadyExist = useLocalStorage("allTasks")

        const dataToSave = dataAlreadyExist.length > 0 ? dataAlreadyExist : []

        dataToSave.push(taskFormData)

        localStorage.setItem("allTasks", JSON.stringify(dataToSave))

        setTaskFormData({
            taskId: nanoid(),
            taskTitle: '',
            taskCategory: '',
            dueDate: '',
            isComplete: false,
        })

        alert("New Task is Added!!")
    }

    return (
        <section className="new-task-container">
            <h2 className="title">Create New Task</h2>
            <form onSubmit={validateFormInput}>
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
                        <option disabled defaultValue={''}>--Choose--</option>
                        {
                            savedCategories.length ?
                                savedCategories.map(category => (
                                    <option key={category.categoryId} value={category}>{category.categoryTitle}</option>
                                )) :
                                <option value={"Custom"}>Custom</option>
                        }
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
