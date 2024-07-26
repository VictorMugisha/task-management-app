import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import TasksContext from '../contexts/TasksContext'
import CategoriesContext from '../contexts/CategoriesContext'
import "../otherStyles/NewTask.css"

export default function UpdateTask() {
    
    const { taskId } = useParams()
    const { allTasks } = useContext(TasksContext)
    
    const taskToUpdate = allTasks.find(task => task.taskId === taskId)

    const { allCategories } = useContext(CategoriesContext)
    
    const [updateTaskFormData, setUpdateTaskFormData] = useState(taskToUpdate)

    function handleChange(event) {
        const { name, value } = event.target
        setUpdateTaskFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (updateTaskFormData.taskTitle == "") {
            alert("Form Title is Required!!")
            return
        }

        function getCurrentDateFormatted() {
            const now = new Date();
            const year = now.getFullYear();
            const month = String(now.getMonth() + 1).padStart(2, '0');
            const day = String(now.getDate()).padStart(2, '0');
          
            return `${year}-${month}-${day}`;
          }
          
          console.log(getCurrentDateFormatted());
          

        if (updateTaskFormData.dueDate == "") {
            updateTaskFormData.dueDate = getCurrentDateFormatted()
        }

        const dataToSave = allTasks.map(task => {
            if (task.taskId === taskId) {
                return updateTaskFormData
            } else {
                return task
            }
        })

        localStorage.setItem("allTasks", JSON.stringify(dataToSave))

        setUpdateTaskFormData({
            taskId: '',
            taskTitle: '',
            taskCategory: '',
            dueDate: '',
            isComplete: false,
        })

        alert("Task is Updated Successfuly!!")
    }
    return (
        <section className="new-task-container">
            <h2 className="title">Update Task</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <p>Enter Task Title</p>
                    <input
                        type="text"
                        placeholder="Task Title"
                        name="taskTitle"
                        value={updateTaskFormData.taskTitle}
                        onChange={handleChange}
                    />
                </div>
                <div className="input">
                    <p>Selece Task Category</p>
                    <select
                        name="taskCategory"
                        onChange={handleChange}
                    >
                        <option value={updateTaskFormData.taskCategory}>{updateTaskFormData.taskCategory}   </option>
                        {
                            allCategories.length ?
                                allCategories.map(category => (
                                    <option key={category.categoryId} value={category.categoryTitle}>{category.categoryTitle}</option>
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
                        value={updateTaskFormData.dueDate}
                        onChange={handleChange}
                    />
                </div>
                <button
                    className="create-task-button"
                >
                    Update
                </button>
            </form>
        </section>
    )
}
