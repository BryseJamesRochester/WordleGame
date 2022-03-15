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
    if(props.guess=="0")
    {
        return (
            <div className="align-items-center" style={{ padding: "30%", backgroundColor: "grey" }}>
              <h1>{props.letter}</h1>
            </div>
          )
    } else
    if(props.guess=="1")
    {
        return (
            <div className="align-items-center" style={{ padding: "30%", backgroundColor: "yellow"  }}>
              <h1>{props.letter}</h1>
            </div>
          )
    } else
    if(props.guess=="2")
    {
        return (
        <div className="align-items-center" style={{ padding: "30%", backgroundColor: "green" }}>
          <h1>{props.letter}</h1>
        </div>
      )
    } else
    return (
        <div className="align-items-center" style={{ padding: "30%" }}>
          <h1>{props.letter}</h1>
        </div>
      )
  }
}

export default Square
