import React from "react"
import './App.css'
import Layout from "./pages/Layout"
import TasksContext from "./contexts/TasksContext"
import CategoriesContext from "./contexts/CategoriesContext"
import useLocalStorage from "./hooks/useLocalStorage"

export default function App() {

  // Tasks Context
  const allTasks = useLocalStorage("allTasks")

  const tasksContextValue = {
    allTasks
  }


  // Categories Context
  const allCategories = useLocalStorage("allCategories")

  function deleteCategory(categoryId) {
    const newCategories = allCategories.filter(category => category.categoryId !== categoryId)
    localStorage.setItem("allCategories", JSON.stringify(newCategories))
  }

  const categoriesContextValue = {
    allCategories,
    deleteCategory
  }

  return (
    <TasksContext.Provider value={tasksContextValue}>
      <CategoriesContext.Provider value={categoriesContextValue}>
        <Layout />
      </CategoriesContext.Provider>
    </TasksContext.Provider>
  )
}
