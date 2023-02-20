import React, { useState, useEffect } from "react"
import List from "./List"
import Alert from "./Alert"

const getLocalStorage = () => {
  let list = localStorage.getItem("groceryList")
  if (list) {
    return JSON.parse(localStorage.getItem("groceryList"))
  } else {
    return []
  }
}

function App() {
  const [grocery, setGrocery] = useState("")
  const [groceryList, setGroceryList] = useState(getLocalStorage)
  const [isEditing, setIsEditing] = useState(false)
  const [editID, setEditID] = useState(null)
  const [alert, setAlert] = useState({
    show: false,
    msg: "",
    type: "",
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!grocery) {
      // setAlert({ show: true, mgs: "enter value", type: "danger" })
      showAlert(true, "danger", "Please Input a value")
    } else if (grocery && isEditing) {
      setGroceryList(
        groceryList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: grocery }
          }
          return item
        })
      )
      setGrocery("")
      setEditID(null)
      setIsEditing(false)
      showAlert(true, "success", "Item Edited")
    } else {
      showAlert(true, "success", "Item successfully added")
      const newGrocery = { id: new Date().getTime().toString(), title: grocery }
      setGroceryList([...groceryList, newGrocery])
      setGrocery("")
    }
  }

  const showAlert = (show = false, type = "", msg = "") => {
    setAlert({ show, type, msg })
  }

  const clearGroceryList = () => {
    showAlert(true, "danger", "Grocery list is deleted")
    setGroceryList([])
  }

  const removeGrocery = (id) => {
    showAlert(true, "danger", "Grocery item removed")
    setGroceryList(groceryList.filter((item) => item.id !== id))
  }

  const editGrocery = (id) => {
    const selectedGrocery = groceryList.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setGrocery(selectedGrocery.title)
  }

  useEffect(() => {
    localStorage.setItem("groceryList", JSON.stringify(groceryList))
  }, [groceryList])

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} showAlert={showAlert} groceryList={groceryList} />
        )}
        <h3>Grocery List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={grocery}
            onChange={(e) => setGrocery(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "submit"}
          </button>
        </div>
      </form>
      {groceryList.length > 0 && (
        <div className="grocery-container">
          <List
            groceries={groceryList}
            removeGrocery={removeGrocery}
            editGrocery={editGrocery}
          />
          <button className="clear-btn" onClick={clearGroceryList}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
