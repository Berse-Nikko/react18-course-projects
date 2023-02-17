import React, { useState } from "react"
import data from "./data"
function App() {
  const [paragraph, setParagraph] = useState([])
  const [count, setCount] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault()
    let num = parseInt(count)
    if (num <= 0) {
      num = 1
    }
    if (count > 8) {
      num = 8
    }
    setParagraph(data.slice(0, num))
  }

  return (
    <section className="section-center">
      <h3>alternative for loren ipsum</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="amount">paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraph.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App
