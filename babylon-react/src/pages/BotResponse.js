import React, { useState } from "react"

function BotResponse(props) {

let [isLoading, setLoading] = useState(true)

setTimeout ( ()=>setLoading(false), 1250 )

  return (isLoading || !props.newMessage) ? (
      <span class="typing">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </span>
    )
    : (
      <> {props.newMessage} </>
  )
}

export default BotResponse
