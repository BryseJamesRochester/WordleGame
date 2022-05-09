/**
 * Makes a guess at the word. Ensures guess is valid and comapres it against the word.
 * @param {Object} gamestate - stores info about current state of users game
 * @param {Number} gamestate.remainingGuesses - number of guesses player has left in current game
 * @param {String} gamestate.secretWord - the word the player is trying to guess
 * @param {Array} gamestate.pastGuesses - array containing all previous guesses
 * @param {String} guess - the guess
 * @returns An object containing various properties.
 *          If guess is invalid will return object with {invalid:true}
 *          If guess is valid will return the new gamestate with results from guess pushed into pastGuesses array,
 *          if game was won or lost, gamestate.result will reflect this
 *          
 */
const checkGuess = function(gamestate, guess){
    if (!validGuess(guess, gamestate.secretWord.length)) return {invalid:true}; //need to figure out best way to handle invalid guess
    if (gamestate.remainingGuesses < 1) return {invalid:true};

    gamestate.remainingGuesses--;

    //matches is an array with a number for each letter, 0-Match, 1-Letter is elsewhere, 2-letter not present
    let matches = compareGuess(gamestate.secretWord, guess.toLowerCase());

    //if it reduces to 0, every letter is a match
    if (matches.reduce((x, y) => { return x + y }) === 0)
        gamestate.result = 'win';

    else if (gamestate.remainingGuesses < 1)
        gamestate.result = 'lose';

    gamestate.pastGuesses.push({guess:guess,matches:matches});

    return {gamestate, matches};
}

/**
     * Does a letter by letter comparison of the guess and the word that is trying to be guessed
     * @param {string} guess - the guess
     * @returns array with info about each letter(0-match, 1-letter is in the word but in wrong place, 2-letter not in word)
     */
const compareGuess = function(secretWord, guess) {
    let obj = {};
    for(let i = 0; i<secretWord.length;i++){
        if(obj[secretWord[i]] == undefined)
        {
            obj[secretWord[i]] = 1;
        }
        else
        {
            obj[secretWord[i]] += 1;
        }
    }
   
    let matches = Array.prototype.map.call(guess, (letter, i) => {
        
        if (letter === secretWord.charAt(i) && obj[letter] != undefined && obj[letter] > 0){
           
            obj[letter] = obj[letter] - 1; 
            return 0;
        }
        if (secretWord.includes(letter) && obj[letter] != undefined && obj[letter] > 0){ 
            obj[letter] = obj[letter] - 1; 
            return 1;
        }
        return 2;
    })
    return matches;
}

/**
 * Checks the guess is valid. A guess is valid if it is the correct length and is made of letters.
 * @param {string} guess - guess to check
 * @returns a boolean indicating if it is a valid guess
 */
const validGuess = function(guess, wordLength) {
    if (guess.length != wordLength){
        return false;
    }
    if (!/^[a-zA-Z]+$/.test(guess)){
        return false;
    }
    return true;
}

module.exports = {checkGuess};