import React, { useState } from "react"
import "./Chatbot.css"

function Chatbot(props) {

  let initialState = [
    {type:'bot',message: 'Hi Laurie how can I help?'},
    {type: 'user', message: props.initialMessage}
  ]

  let [messages, setMessages] = useState(initialState)

  function handleNewInput(event) {
    event.preventDefault()
    let message = event.target[0].value
    event.target[0].value = ''
    let newMessages = []

    for (var i=0; i<messages.length; i++) {
      newMessages.push(messages[i])
    }

    newMessages.push({
      type: "user",
      message: message
    })
 
    setMessages(newMessages)
  }

  return (
    <section id="chatbot" className="page">
      <header>
        <img className="logo" alt="Babylon" src="img/babylon-logo.png" />
      </header>
      <article>
 
        {messages.map((m,i) => (
          <p key={i} className={`bubble ${m.type}`}>{m.message}</p>
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
