import React from "react"

function Square(props) {
  if (props.letter=="") {
    return (
      <div className="align-items-center text-white" style={{ padding: "30%" }}>
        <h1>/</h1>
      </div>
    )
  }
  else {
    return (
        <div className="align-items-center" style={{ padding: "30%" }}>
          <h1>{props.letter}</h1>
        </div>
      )
  }
}

export default Square
