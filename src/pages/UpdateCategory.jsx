import React, { useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import CategoriesContext from '../contexts/CategoriesContext'

export default function UpdateCategory() {
    const { categoryId } = useParams()
    const { allCategories } = useContext(CategoriesContext)

    const categoryToUpdate = allCategories.find(category => category.categoryId === categoryId)

    const [updatedCategory, setUpdatedCategory] = useState(categoryToUpdate)

    function handleChange(event) {
        const {name, value} = event.target
        setUpdatedCategory(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (updatedCategory.categoryTitle == "") {
            alert("You need to provide category title")
            return
        }

        const dataToSave = allCategories.map(category => {
            if (category.categoryId === categoryId) {
                return updatedCategory
            } else {
                return category
            }
        })

        localStorage.setItem("allCategories", JSON.stringify(dataToSave))

        alert("Category updated successfully!!")
        setUpdatedCategory({
            categoryId: '',
            categoryTitle: ''
        })
    }

    return (
        <section className="new-task-container">
            <h2 className="title">Update Category</h2>
            <form onSubmit={handleSubmit}>
                <div className="input">
                    <p>Enter Category Title</p>
                    <input
                        type="text"
                        placeholder="Category Title"
                        name="categoryTitle"
                        value={updatedCategory.categoryTitle}
                        onChange={handleChange}
                    />
                </div>
                <button className="create-task-button">Update</button>
            </form>
        </section>
    )
}
