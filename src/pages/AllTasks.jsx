import React from 'react'
import Task from '../components/Task/Task'

// Stylesheet for this component are in Task folder in components

export default function AllTasks() {
    return (
        <section className="all-tasks-container">
            <h1 className="title">All Tasks</h1>
            <div className="container">
                <Task />
                <Task />
                <Task />
                <Task />
            </div>
        </section>
    )
}
