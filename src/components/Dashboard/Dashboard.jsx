import React from 'react'
import "./Dashboard.css"

export default function Dashboard() {
  return (
    <section>
        <div className="dashboard-title">
            <h3>Dashboard</h3>
        </div>
        <div className="dashboard-cards">
            <div className="card">
                <h1>12</h1>
                <p>Tasks</p>
            </div>
            <div className="card">
                <h1>5</h1>
                <p>Categories</p>
            </div>
            <div className="card">
                <h1>6</h1>
                <p>Tasks <span>Completed</span></p>
            </div>
            <div className="card">
                <h1>4</h1>
                <p>Tasks <span>Pending</span></p>
            </div>
        </div>
    </section>
  )
}
