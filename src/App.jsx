import React from "react"
import './App.css'
import Layout from "./pages/Layout"
import TasksContext from "./contexts/TasksContext"
import CategoriesContext from "./contexts/CategoriesContext"
import useLocalStorage from "./hooks/useLocalStorage"

export default function App() {

  // Tasks Context
  const allTasks = useLocalStorage("allTasks")
  
  function deleteTask(taskId) {
    const newTasks = allTasks.filter(task => task.taskId !== taskId)
    localStorage.setItem("allTasks", JSON.stringify(newTasks))
  }

  const tasksContextValue = {
    allTasks,
    deleteTask
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
