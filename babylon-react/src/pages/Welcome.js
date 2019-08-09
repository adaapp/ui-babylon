import React from 'react'
 // git stash && git fetch
 // git pull ali-6-react-workshop-2-end
function Welcome(props) {

  return (
    <section id="welcome" className="page">
    <header>
      <img className="logo" alt="Babylon" src="img/babylon-logo.png" />
    </header>

    {props.children}

    <nav className="ui secondary labeled fluid five item mini icon menu">
      <a className="item">
        <i className="heart icon"></i>
        Home
      </a>
      <a className="item">
        <i className="calendar outline icon"></i>
        Appointments
      </a>
      <a className="item">
        <i className="stethoscope icon"></i>
        Healthcheck
      </a>
      <a className="item">
        <i className="bell icon"></i>
        Notifications
      </a>
      <a className="item">
        <i className="child icon"></i>
        You
      </a>
    </nav>
  </section>
  )
}

export default Welcome
