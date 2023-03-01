import React, { useState, useEffect } from "react"
import data from "./data"
import Article from "./Article"

const getStorageTheme = () => {
  let theme = "light-theme"
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme")
  }
  return theme
}

function App() {
  const [theme, setTheme] = useState(getStorageTheme())

  const changeTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme")
    } else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem("theme", theme)
    // eslint-disable-next-line
  }, [theme])

  return (
    <main>
      <nav className="light-theme">
        <div className="nav-center">
          <h1>overreacted</h1>
          <button className="btn" onClick={changeTheme}>
            toggle
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((article) => {
          return <Article key={article.id} {...article} />
        })}
      </section>
    </main>
  )
}

export default App
