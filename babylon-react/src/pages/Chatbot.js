import React from "react"

function Chatbot() {
  return (
    <section id="chatbot" class="page">
      <header>
        <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
      </header>
      <article>
        <p class="bubble bot">Hi Laurie, how can I help you?</p>
        <p class="bubble user">I have a sore throat.</p>
        <p class="bubble bot">
          <span class="typing">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </span>
        </p>
      </article>
      <footer>
        <form>
          <input type="text" placeholder="Type a message" />
        </form>
      </footer>
    </section>
  )
}

export default Chatbot
