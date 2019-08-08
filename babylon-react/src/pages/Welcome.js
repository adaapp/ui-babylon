import React from 'react'

function Welcome(props) {

  function handleForm(event) {
    event.preventDefault()
    let message = event.target[0].value
    props.setInitialMessage(message)
  }

  return (
    <section id="welcome" class="page">
    <header>
      <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
    </header>

    <form onSubmit={handleForm} action="#chatbot">
      <label for="initial">Hi Laurie, how can I help you?</label>
      <input placeholder="e.g. I have a headache" type="text" name="initial" />
    </form>

    <nav class="ui secondary labeled fluid five item mini icon menu">
      <a class="item">
        <i class="heart icon"></i>
        Home
      </a>
      <a class="item">
        <i class="calendar outline icon"></i>
        Appointments
      </a>
      <a class="item">
        <i class="stethoscope icon"></i>
        Healthcheck
      </a>
      <a class="item">
        <i class="bell icon"></i>
        Notifications
      </a>
      <a class="item">
        <i class="child icon"></i>
        You
      </a>
    </nav>
  </section>
  )
}

export default Welcome