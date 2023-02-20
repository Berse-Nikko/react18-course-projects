import React, { useState, useEffect } from "react"
//import rgbToHex from "./utils"

const SingleColor = ({ rgb, weight, index, hex }) => {
  const [colorCopied, setColorCopied] = useState(false)
  const rgbValues = rgb.join(",")
  const hexValue = `#${hex}`

  const copyColor = () => {
    setColorCopied(true)
    navigator.clipboard.writeText(hexValue)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setColorCopied(false)
    }, 3000)
    return () => clearTimeout(timeout)
  }, [colorCopied])

  return (
    <article
      className={`color ${index > 10 && "color-light"}`}
      style={{ backgroundColor: `rgb(${rgbValues})` }}
      onClick={copyColor}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      {colorCopied && <p className="alert"> Copied to Clipboard</p>}
    </article>
  )
}

export default SingleColor
