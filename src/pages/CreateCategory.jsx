import React, { useState } from 'react'
import "../otherStyles/NewTask.css"
import { nanoid } from 'nanoid'
import useLocalStorage from '../hooks/useLocalStorage'

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

  function handleSubmit(event) {
    event.preventDefault()
    if (categoryTitle.categoryTitle == "") {
      alert("You need to provide a title!!")
      return
    }

    const storedData = useLocalStorage("allCategories")

    const finalDataToSave = storedData.length ? storedData : []

    finalDataToSave.push(categoryTitle)

    localStorage.setItem("allCategories", JSON.stringify(finalDataToSave))

    setCategoryTitle({
      categoryId: nanoid(),
      categoryTitle: ''
    })

    alert("Category added successfully!!")
  }
  return (
    <section className="new-task-container">
      <h2 className="title">Create New Category</h2>
      <form onSubmit={handleSubmit}>
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
