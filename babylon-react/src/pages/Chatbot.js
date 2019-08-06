import React, { useState } from "react"
import "./Chatbot.css"

import ChatMessage from "../chatbot-components/ChatMessage"
import TypingIndicator from "../chatbot-components/TypingIndicator"

function Chatbot(props) {
  let initialState = [
    { type: "bot", content: "Hi Laurie how can I help?" },
    { type: "user", content: props.initialMessage },
    { type: "bot", content: <TypingIndicator /> }
  ]

  let [messages, setMessages] = useState(initialState)

  function handleNewInput(event) {
    event.preventDefault()
    let message = event.target[0].value
    event.target[0].value = ""

    let newMessages = messages.slice(0)

    newMessages.push({
      type: "user",
      content: message
    })

    newMessages.push({
      type: "bot",
      content: <TypingIndicator />
    })

    setMessages(newMessages)

    //setTimeout(() => setMessages(newMessages), 1000)
  }

  return (
    <section id="chatbot" className="page">
      <header>
        <img className="logo" alt="Babylon" src="img/babylon-logo.png" />
      </header>
      <article>
        {messages.map((m, i) => (
          <ChatMessage key={i} type={m.type} last={i+1 === messages.length || i === messages.length - 2}>
            {m.content}
          </ChatMessage>
        ))}
      </article>
      <footer>
        <form onSubmit={handleNewInput}>
          <input type="text" placeholder="Type a message" />
        </form>
      </footer>
    </section>
  )
}

export default Chatbot
