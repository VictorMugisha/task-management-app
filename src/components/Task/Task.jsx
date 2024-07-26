import React, { useContext } from 'react'
import TasksContext from "../../contexts/TasksContext"
import "./Task.css"

export default function Task({ task }) {
    const { deleteTask } = useContext(TasksContext)
    return (
        <div className="task">
            <p className="task-title">{task.taskTitle}</p>
            <p className="task-category">{task.taskCategory}</p>
            <p className="due-date">{task.dueDate}</p>
            <p className="completion-status">{task.isComplete ? "Complete" : "Pending"}</p>

            <div className="buttons">
                <button>Complete</button>
                <button>Edit</button>
                <button onClick={() => deleteTask(task.taskId)}>Delete</button>
            </div>
        </div>
    )
}
