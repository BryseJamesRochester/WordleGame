import React from "react"
import { wordAnswer, boardDefault } from "./Words"

function Square(props) {
  // if (boardDefault[props.col][props.row]) {
  //   return (
  //     <svg width="110" height="110" viewBox="0 0 110 110">
  //     <g>
  //       <path
  //         id="imagebot_2"
  //         fill="none"
  //         stroke-width="2"
  //         stroke-miterlimit="10"
  //         stroke-linecap="square"
  //         stroke="#000000"
  //         d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
  //       />
  //       <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Verdana" font-size="35" fill="black"></text>
  //     </g>
  //   </svg>
  //   )
  // }
  // else {
  //   if(props.guess=="0")
  //   {
  //       return (
  //         <svg width="110" height="110" viewBox="0 0 110 110">
  //         <g>
  //           <path
  //             id="imagebot_2"
  //             fill="grey"
  //             stroke-width="2"
  //             stroke-miterlimit="10"
  //             stroke-linecap="square"
  //             stroke="#000000"
  //             d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
  //           />
  //           <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Verdana" font-size="35" fill="black">{props.letter}</text>
  //         </g>
  //       </svg>
  //         )
  //   } else
  //   if(props.guess=="1")
  //   {
  //       return (
  //         <svg width="110" height="110" viewBox="0 0 110 110">
  //         <g>
  //           <path
  //             id="imagebot_2"
  //             fill="yellow"
  //             stroke-width="2"
  //             stroke-miterlimit="10"
  //             stroke-linecap="square"
  //             stroke="#000000"
  //             d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
  //           />
  //           <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Verdana" font-size="35" fill="black">{props.letter}</text>
  //         </g>
  //       </svg>
  //         )
  //   } else
  //   if(props.guess=="2")
  //   {
  //       return (
  //         <svg width="110" height="110" viewBox="0 0 110 110">
  //         <g>
  //           <path
  //             id="imagebot_2"
  //             fill="green"
  //             stroke-width="2"
  //             stroke-miterlimit="10"
  //             stroke-linecap="square"
  //             stroke="#000000"
  //             d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
  //           />
  //           <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Verdana" font-size="35" fill="black">{props.letter}</text>
  //         </g>
  //       </svg>
  //     )
  //   } else //guess has not been checked yet
  //   return (
  //     <svg width="110" height="110" viewBox="0 0 110 110">
  //     <g>
  //       <path
  //         id="imagebot_2"
  //         fill="none"
  //         stroke-width="2"
  //         stroke-miterlimit="10"
  //         stroke-linecap="square"
  //         stroke="#000000"
  //         d="M 5 5 L 5 105 L 105 105 L 105 5 L 5 5 z"
  //       />
  //       <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Verdana" font-size="35" fill="black">{props.letter}</text>
  //     </g>
  //   </svg>
  //     )
  // }
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
          <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-family="Verdana" font-size="35" fill="black">{boardDefault[props.col][props.row]}</text>
        </g>
      </svg>
        )
}

export default Square
