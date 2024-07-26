import React from "react"
import './App.css'
import Layout from "./pages/Layout"
import TasksContext from "./contexts/TasksContext"
import CategoriesContext from "./contexts/CategoriesContext"
import useLocalStorage from "./hooks/useLocalStorage"

export default function App() {

  const allTasks = useLocalStorage("allTasks")

  const tasksContextValue = {
    allTasks
  }

  const allCategories = useLocalStorage("allCategories")

  const categoriesContextValue = {
    allCategories
  }

  return (
    <TasksContext.Provider value={tasksContextValue}>
      <CategoriesContext.Provider value={categoriesContextValue}>
        <Layout />
      </CategoriesContext.Provider>
    </TasksContext.Provider>
  )
}
