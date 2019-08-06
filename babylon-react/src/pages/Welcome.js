import React from 'react';
import './Welcome.css'
function Welcome(props) {

  function handleWelcomeForm(event) {
    event.preventDefault()
    let message = event.target[0].value
    props.setInitialMessage(message)
  }
  
  return (
    <section id="welcome" className="page">
    <header>
      <img className="logo" alt="Babylon" src="img/babylon-logo.png" />
    </header>

    <form action="#chatbot" onSubmit={handleWelcomeForm}>
      <label htmlFor="initial">Hi Laurie, how can I help you?</label>
      <input
        placeholder="e.g. I have a headache"
        type="text"
        name="initial"
      />
    </form>

    <nav className="ui secondary labeled fluid five item mini icon menu">
      <a className="item">
        <i className="heart icon" />
        Home
      </a>
      <a className="item">
        <i className="calendar outline icon" />
        Appointments
      </a>
      <a className="item">
        <i className="stethoscope icon" />
        Healthcheck
      </a>
      <a className="item">
        <i className="bell icon" />
        Notifications
      </a>
      <a className="item">
        <i className="child icon" />
        You
      </a>
    </nav>
  </section>
  )
}

export default Welcome;