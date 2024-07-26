import React from 'react'
import "./Task.css"

export default function Task() {
    return (
        <div className="task">
            <p className="task-title">Learning React Higher Order Components</p>
            <p className="task-category">Personal</p>
            <p className="due-date">12 Nov 2024, 12:02 PM</p>
            <p className="completion-status">Pending</p>

            <div className="buttons">
                <button>Complete</button>
                <button>Edit</button>
                <button>Delete</button>
            </div>
        </div>
    )
}
