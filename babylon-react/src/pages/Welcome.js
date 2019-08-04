import React from 'react';
import './Welcome.css'
function Welcome(props) {

  function handleWelcomeForm(event) {
    event.preventDefault()
    let message = event.target[0].value
    props.setInitialMessage(message)
  }
  
  return (
    <section id="welcome" class="page">
    <header>
      <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
    </header>

    <form action="#chatbot" onSubmit={handleWelcomeForm}>
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
  )
}

export default Welcome;