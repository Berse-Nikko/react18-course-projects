import React, { useState } from "react"
import SingleColor from "./SingleColor"

import Values from "values.js"

function App() {
  const [color, setColor] = useState("")
  const [error, setError] = useState(false)
  const [colorList, setColorList] = useState(new Values("#33a7f5").all(10))

  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(10)
      setColorList(colors)
      setError(false)
    } catch (error) {
      setError(true)
      console.log(error)
    }
  }

  return (
    <>
      <section className="container">
        <h3> Color Finder</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="#f15025"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            find
          </button>
        </form>
      </section>
      <section className="colors">
        {colorList.map((color, index) => {
          return (
            <SingleColor key={index} {...color} index={index} hex={color.hex} />
          )
        })}
      </section>
    </>
  )
}

export default App
