import React, { useState } from "react"
import "./App.css"

import Welcome from "./pages/Welcome"
import Chatbot from "./pages/Chatbot"

function App() {
  let [initialMessage, setInitialMessage] = useState(false)
  // ali-6-react-workshop-2-end
  function handleForm(event) {
    event.preventDefault()
    let message = event.target[0].value
    setInitialMessage(message)
  }

  return (
    <div>
      <a id="skip-to-content" href="#chatbot" title="Skip to content">
        Skip to content
      </a>
      <main>
        {!initialMessage && (
          <Welcome>
            <form onSubmit={handleForm} action="#chatbot">
              <label for="initial">Hi Laurie, how can I help you?</label>
              <input
                placeholder="e.g. I have a headache"
                type="text"
                name="initial"
              />
            </form>
          </Welcome>
        )}
        {initialMessage && <Chatbot initialMessage={initialMessage}  />}
      </main>
    </div>
  )
}

export default App
