import React, { useContext } from 'react'
import TasksContext from '../contexts/TasksContext'
import Task from '../components/Task/Task'

// Stylesheet for this component are in Task folder in components

export default function AllTasks() {
    const { allTasks } = useContext(TasksContext)
    return (
        <section className="all-tasks-container">
            <h1 className="title">All Tasks</h1>
            <div className="container">
                {
                    allTasks.length ?
                    allTasks.map(task => (
                        <Task key={task.taskId} task={task} />
                    )) :
                    <div>No Tasks Have Been Saved Yet!!!</div>
                }
            </div>
        </section>
    )
}
