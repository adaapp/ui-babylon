import React, { useState } from "react"
import "./App.css"

import Welcome from "./pages/Welcome"
import Chatbot from "./pages/Chatbot"

function App() {
  let [initialMessage, setInitialMessage] = useState(false)

  return (
    <div>
      <a id="skip-to-content" href="#chatbot" title="Skip to content">
        Skip to content
      </a>
      <main>
        {!initialMessage && (
          <Welcome />
        )} 
        {initialMessage && (
          <Chatbot />
        )}     
      </main>
    </div>
  )
}

export default App
