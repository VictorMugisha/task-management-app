import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

export default function Navbar() {
  return (
    <header className="header">
      <div className="logo-container">
        <h1>Task Management</h1>
      </div>
      <nav>
        <Link to="/"><button>Home</button></Link>
        <Link to="/all-tasks"><button>All Tasks</button></Link>
        <button>New Task</button>
        <button>All Categories</button>
        <button>Create Category</button>
      </nav>
    </header>
  )
}
