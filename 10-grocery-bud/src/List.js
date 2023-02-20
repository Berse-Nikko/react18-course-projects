import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
const List = ({ groceries, removeGrocery, editGrocery }) => {
  return (
    <div className="grocery-list">
      {groceries.map(({ id, title }) => {
        return (
          <article key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="btn-container">
              <button
                type="button"
                className="edit-btn"
                onClick={() => editGrocery(id)}
              >
                <FaEdit />
              </button>
              <button
                type="button"
                className="delete-btn"
                onClick={() => removeGrocery(id)}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
