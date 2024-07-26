import React from 'react'
import "./Category.css"

export default function Category() {
    return (
        <div className="category">
            <h3 className="category-title">Personal</h3>
            <div className="buttons">
                <button className="category-button">Edit</button>
                <button className="category-button">Delete</button>
            </div>
        </div>
    )
}
