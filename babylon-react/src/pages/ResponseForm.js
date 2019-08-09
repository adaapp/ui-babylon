import React from "react"

function ResponseForm(props) {

  return (

    <form onSubmit={ props.handleTextInput }>
      { (props.inputType==="text" ) ? (
        <input autoFocus type="text" placeholder="Type a message" />
      )
      : (
        <>
          <input type="button" value="YES" onClick={ props.handleButtonInput.yes }/>
          <input type="button" value="NO" onClick={ props.handleButtonInput.no } />
        </>)}
    </form>
  )
}

export default ResponseForm
