import React, {useContext, useEffect} from "react"
import { AppContext } from "./Game"


function Square(props) {
  const gameData = useContext(AppContext);
  if (gameData.board.matches[props.col][props.row] === 2) {
    return (
      <svg width="110" height="110" viewBox="0 0 110 110">
        <g>
          <path
            id="imagebot_2"
            fill="grey"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke="#000000"
            d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Verdana"
            font-size="35"
            fill="black"
          >
            {gameData.board.gameBoard[props.col][props.row]}
          </text>
        </g>
      </svg>
    )
  } else if (gameData.board.matches[props.col][props.row] === 1) {
    return (
      <svg width="110" height="110" viewBox="0 0 110 110">
        <g>
          <path
            id="imagebot_2"
            fill="yellow"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke="#000000"
            d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Verdana"
            font-size="35"
            fill="black"
          >
            {gameData.board.gameBoard[props.col][props.row]}
          </text>
        </g>
      </svg>
    )
  } else if (gameData.board.matches[props.col][props.row] === 0) {
    return (
      <svg width="110" height="110" viewBox="0 0 110 110">
        <g>
          <path
            id="imagebot_2"
            fill="green"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke="#000000"
            d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Verdana"
            font-size="35"
            fill="black"
          >
            {gameData.board.gameBoard[props.col][props.row]}
          </text>
        </g>
      </svg>
    )
  } //guess has not been checked yet
  else {
    return (
      <svg width="110" height="110" viewBox="0 0 110 110">
        <g>
          <path
            id="imagebot_2"
            fill="none"
            stroke-width="2"
            stroke-miterlimit="10"
            stroke-linecap="square"
            stroke="#000000"
            d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
          />
          <text
            x="50%"
            y="50%"
            text-anchor="middle"
            dominant-baseline="middle"
            font-family="Verdana"
            font-size="35"
            fill="black"
          >
            {gameData.board.gameBoard[props.col][props.row]}
          </text>
        </g>
      </svg>
    )
  }
}

export default Square