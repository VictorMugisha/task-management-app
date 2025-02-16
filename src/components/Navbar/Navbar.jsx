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
        <Link to="/new-task"><button>New Task</button></Link>
        <Link to="/all-categories"><button>All Categories</button></Link>
        <Link to="/new-category"><button>Create Category</button></Link>
      </nav>
    </header>
  )
}
