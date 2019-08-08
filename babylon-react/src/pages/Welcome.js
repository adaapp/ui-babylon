import React from 'react'
 // git stash && git fetch
 // git pull ali-6-react-workshop-2-end
function Welcome(props) {

  return (
    <section id="welcome" class="page">
    <header>
      <img class="logo" alt="Babylon" src="img/babylon-logo.png" />
    </header>

    {props.children}

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