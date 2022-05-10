export function checkGuess(index){
    var guess = boardDefault[index].join("");
    var guessesCopy = [...guesses]
    for(let i = 0; i < guess.length; i++){
        if(boardDefault[index][i] === wordAnswer[index][i]){
            guessesCopy[index][i] = "2";
            continue;
        }
        for(let j = 0; j < guess.length; j++){
            if(boardDefault[index][i] === wordAnswer[index][j]){
                guessesCopy[index][i] = "1";
                continue;
            }
        }
        if(guessesCopy[index][i] === "")
            guessesCopy[index][i] =  "0";
    }
    return guessesCopy;
}


export function checkGameState(index,context){
    var guessesCopy = [...context.currentGuesses];
    var gameWon = true;
    for(let i = 0; i < guessesCopy[index].length; i++){
        if(guessesCopy[index][i] === "0" ||guessesCopy[index][i] === "1"){
            gameWon = false;
            break;
        }
    }
    return gameWon;
}


// base board data 
export const defaultData = {
    gameBoard :  
    [["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]]

    , matches :
    [["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]],

    remainingGuesses: 6
}


export const boardDefault = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
]
export const wordAnswer = [
    ["H","E","L","L","O"],
    ["H","E","L","L","O"],
    ["H","E","L","L","O"],
    ["H","E","L","L","O"],
    ["H","E","L","L","O"],
    ["H","E","L","L","O"]

]
export const guesses = [
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""],
    ["","","","",""]
]