import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import TasksContext from "../../contexts/TasksContext"
import "./Task.css"

export default function Task({ task }) {
    const { deleteTask, completeTask } = useContext(TasksContext)
    return (
        <div className="task">
            <p className="task-title">{task.taskTitle}</p>
            <p className="task-category">{task.taskCategory}</p>
            <p className="due-date">{task.dueDate}</p>
            <p className="completion-status">{task.isComplete ? "Complete" : "Pending"}</p>

            <div className="buttons">
                <button onClick={() => completeTask(task.taskId)}>Complete</button>
                <Link to={`/edit-task/${task.taskId}`}><button>Edit</button></Link>
                <button onClick={() => deleteTask(task.taskId)}>Delete</button>
            </div>
        </div>
    )
}
