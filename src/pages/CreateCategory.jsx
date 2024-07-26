import React from 'react'
import "../otherStyles/NewTask.css"

// The Stylesheet for this is borrowed from NewTask's stylesheet

export default function CreateCategory() {
  return (
    <section className="new-task-container">
        <h2 className="title">Create New Category</h2>
        <form>
            <div className="input">
                <p>Enter Category Title</p>
                <input type="text" placeholder="Task Title" name="taskTitle" />
            </div>
            <button className="create-task-button">Add Category</button>
        </form>
    </section>
  )
}
