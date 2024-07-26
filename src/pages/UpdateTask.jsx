import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import TasksContext from '../contexts/TasksContext'
import CategoriesContext from '../contexts/CategoriesContext'
import "../otherStyles/NewTask.css"

export default function UpdateTask() {
    const { taskId } = useParams()
    const { allTasks } = useContext(TasksContext)

    const taskToUpdate = allTasks.find(task => task.taskId === taskId)

    const { allCategories } = useContext(CategoriesContext)
    return (
        <section className="new-task-container">
            <h2 className="title">Update Task</h2>
            <form>
                <div className="input">
                    <p>Enter Task Title</p>
                    <input
                        type="text"
                        placeholder="Task Title"
                        name="taskTitle"
                        value={taskToUpdate.taskTitle}
                    // onChange={}
                    />
                </div>
                <div className="input">
                    <p>Selece Task Category</p>
                    <select
                        name="taskCategory"
                    // onChange={}
                    >
                        <option value={taskToUpdate.taskCategory}>{taskToUpdate.taskCategory}   </option>
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
                        value={taskToUpdate.dueDate}
                    // onChange={}
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
