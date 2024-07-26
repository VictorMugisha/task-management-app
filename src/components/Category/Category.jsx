import React from 'react'
import "./Category.css"

export default function Category({category}) {
    return (
        <div className="category">
            <h3 className="category-title">{category.categoryTitle}</h3>
            <div className="buttons">
                <button className="category-button">Edit</button>
                <button className="category-button">Delete</button>
            </div>
        </div>
    )
}
