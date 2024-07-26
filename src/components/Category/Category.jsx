import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import CategoriesContext from '../../contexts/CategoriesContext'
import "./Category.css"

export default function Category({ category }) {
    const { deleteCategory } = useContext(CategoriesContext)
    return (
        <div className="category">
            <h3 className="category-title">{category.categoryTitle}</h3>
            <div className="buttons">
                <Link to={`/edit-category/${category.categoryId}`}><button className="category-button">Edit</button></Link>
                <button
                    className="category-button"
                    onClick={() => deleteCategory(category.categoryId)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}
