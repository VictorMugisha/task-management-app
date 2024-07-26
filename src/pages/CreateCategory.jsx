import React, { useState } from 'react'
import "../otherStyles/NewTask.css"
import { nanoid } from 'nanoid'

// The Stylesheet for this is borrowed from NewTask's stylesheet

export default function CreateCategory() {
  const [categoryTitle, setCategoryTitle] = useState({
    categoryId: nanoid(),
    categoryTitle: ''
  })

  function handleChange(event) {
    const { name, value } = event.target
    setCategoryTitle(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  function validateInput(event) {
    event.preventDefault()
    if (categoryTitle.categoryTitle == "") {
      alert("You need to provide a title!!")
      return
    }
    return true
  }
  return (
    <section className="new-task-container">
      <h2 className="title">Create New Category</h2>
      <form onSubmit={validateInput}>
        <div className="input">
          <p>Enter Category Title</p>
          <input
            type="text"
            placeholder="Category Title"
            name="categoryTitle"
            value={categoryTitle.categoryTitle}
            onChange={handleChange}
          />
        </div>
        <button className="create-task-button">Add Category</button>
      </form>
    </section>
  )
}
