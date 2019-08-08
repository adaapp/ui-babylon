import React, { useState } from "react"

function Chatbot(props) {
  
  let initialMessages = [
    { userType: "bot", content: "Hi Laurie, how can I help you?" },
    { userType: "user", content: props.initialMessage },
    {
      userType: "bot",
      content: (
        <span class="typing">
          <span>.</span>
          <span>.</span>
          <span>.</span>
        </span>
      )
    }
  ]

  let [messages, setMessages] = useState(initialMessages)

  function handleNewMessage(event) {
    event.preventDefault()
    let newMessage = event.target[0].value
    let newMessageObj = { userType: "user", content: newMessage}
    let newMessages = messages.slice(0)
    newMessages.push(newMessageObj)
    setMessages(newMessages)
    event.target[0].value = ''
    window.scrollTo(0, 100000)
  }

  return (
    <section id="chatbot" className="page swoosh">
      <header>
        <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
      </header>
      <article class="clearfix">
        { messages.map(m => (
          <p className={`bubble ${m.userType}`}>
            {m.content}
          </p>
        )) }
      </article>
      <footer>
        <form onSubmit={handleNewMessage}>
          <input type="text" placeholder="Type a message" />
        </form>
      </footer>
    </section>
  )
}

export default Chatbot
