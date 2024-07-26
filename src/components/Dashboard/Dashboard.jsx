import React, { useContext } from 'react'
import TasksContext from '../../contexts/TasksContext'
import CategoriesContext from '../../contexts/CategoriesContext'
import "./Dashboard.css"

export default function Dashboard() {
    const { allTasks } = useContext(TasksContext)
    const { allCategories } = useContext(CategoriesContext)
    const completedTasks = allTasks.filter(task => task.isComplete).length
    const pendingTasks = allTasks.filter(task => !task.inComplete).length
    return (
        <section>
            <div className="dashboard-title">
                <h3>Dashboard</h3>
            </div>
            <div className="dashboard-cards">
                <div className="card">
                    <h1>{allTasks.length}</h1>
                    <p>Tasks</p>
                </div>
                <div className="card">
                    <h1>{allCategories.length}</h1>
                    <p>Categories</p>
                </div>
                <div className="card">
                    <h1>{completedTasks}</h1>
                    <p>Tasks <span>Completed</span></p>
                </div>
                <div className="card">
                    <h1>{pendingTasks}</h1>
                    <p>Tasks <span>Pending</span></p>
                </div>
            </div>
        </section>
    )
}
