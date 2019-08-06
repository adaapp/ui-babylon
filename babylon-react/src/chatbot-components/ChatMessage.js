import React from "react"
import "./ChatMessage.css"

function ChatMessage(props) {
  return (
    <p className={`bubble ${props.type} ${props.last ? "last" : "old"}`}>
      {props.children}
    </p>
  )
}

export default ChatMessage
