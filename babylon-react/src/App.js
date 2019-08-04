import React from "react"
import "./App.css"

function App() {
  return (
    <>
      <a id="skip-to-content" href="#chatbot" title="Skip to content">
        Skip to content
      </a>
      <main>
        <section id="welcome" class="page">
          <header>
            <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
          </header>

          <form action="#chatbot">
            <label for="initial">Hi Laurie, how can I help you?</label>
            <input
              placeholder="e.g. I have a headache"
              type="text"
              name="initial"
            />
          </form>

          <nav class="ui secondary labeled fluid five item mini icon menu">
            <a class="item">
              <i class="heart icon" />
              Home
            </a>
            <a class="item">
              <i class="calendar outline icon" />
              Appointments
            </a>
            <a class="item">
              <i class="stethoscope icon" />
              Healthcheck
            </a>
            <a class="item">
              <i class="bell icon" />
              Notifications
            </a>
            <a class="item">
              <i class="child icon" />
              You
            </a>
          </nav>
        </section>
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
      </main>
    </>
  )
}

export default App
