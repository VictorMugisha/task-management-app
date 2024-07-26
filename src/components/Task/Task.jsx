import React from 'react'
import "./Task.css"

export default function Task({task}) {
    return (
        <div className="task">
            <p className="task-title">{task.taskTitle}</p>
            <p className="task-category">{task.taskCategory}</p>
            <p className="due-date">{task.dueDate}</p>
            <p className="completion-status">{task.isComplete ? "Complete" : "Pending"}</p>

            <div className="buttons">
                <button>Complete</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
