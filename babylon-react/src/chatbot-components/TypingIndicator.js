import React, { useState } from "react"
import "./TypingIndicator.css"

function TypingIndicator() {
  let [loaded, setLoaded] = useState(false)

  setTimeout(() => setLoaded(true), 2000)

  return (
    <>
      {!loaded && (
        <span className="typing">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      )}
      {loaded && (
        `OK, tell me a little bit more about it`
      )}
    </>
  )
}

export default TypingIndicator
