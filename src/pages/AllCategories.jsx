import React from 'react'
import Category from '../components/Category/Category'

export default function AllCategories() {
  return (
    <section className="categories-container">
        <h2 className="title">Registered Categories</h2>
        <div className="container">
            <Category />
            <Category />
            <Category />
        </div>
    </section>
  )
}
