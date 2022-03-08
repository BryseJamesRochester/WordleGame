import React from "react"

function Square(props) {
  return (
    <div className="align-items-center" style={{ padding: "40%" }}>
      <h1>{props.letter}</h1>
    </div>
  )
}

export default Square
