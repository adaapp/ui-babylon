import React, { useState } from "react"
import "./App.css"

import Welcome from './pages/Welcome'
import Chatbot from './pages/Chatbot'

function App() {

  const [initialMessage, setInitialMessage] = useState(null)

  return (
    <>
      <a id="skip-to-content" href="#chatbot" title="Skip to content">
        Skip to content
      </a>
      <main>

        {!initialMessage && (
          <Welcome setInitialMessage={setInitialMessage} />
        )}
        {initialMessage && (
          <Chatbot initialMessage={initialMessage} />
        )}
        
      </main>
    </>
  )
}

export default App
