import React from 'react'
import "../otherStyles/NewTask.css"

export default function NewTask() {
   return (
    <section className="new-task-container">
        <h2 className="title">Create New Task</h2>
        <form>
            <div className="input">
                <p>Enter Task Title</p>
                <input type="text" placeholder="Task Title" name="taskTitle" />
            </div>
            <div className="input">
                <p>Selece Task Category</p>
                <select name="taskCategory">
                    <option value="" disabled selected>--Choose--</option>
                    <option value="">Personal</option>
                    <option value="">Work</option>
                    <option value="">Study</option>
                    <option value="">Custom</option>
                </select>
            </div>
            <div className="input">
                <p>Enter Task Due Date</p>
                <input type="date" name="dueDateTime" />
            </div>
            <button className="create-task-button">Add Task</button>
        </form>
    </section>
  )
}
