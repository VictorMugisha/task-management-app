import React from 'react'
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="header">
        <div className="logo-container">
            <h1>Task Management</h1>
        </div>
        <nav>
            <button>All Tasks</button>
            <button>New Task</button>
            <button>All Categories</button>
            <button>Create Category</button>
        </nav>
    </header>
  )
}
