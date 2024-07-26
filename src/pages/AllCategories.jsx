import React, { useContext } from 'react'
import CategoriesContext from "../contexts/CategoriesContext"
import Category from '../components/Category/Category'

export default function AllCategories() {
  const { allCategories } = useContext(CategoriesContext)
  return (
    <section className="categories-container">
      <h2 className="title">Registered Categories</h2>
      <div className="container">
        {
          allCategories.length ?
          allCategories.map(category => (
            <Category key={category.categoryId} category={category} />
          )) :
          <div>No Categories Added Yet!</div>
        }
      </div>
    </section>
  )
}
