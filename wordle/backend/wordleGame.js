"use strict";

const map = Array.prototype.map;


/**
 * A Wordle object is used to play a game of wordle.
 * Use wordle.newGame() to start the game, and <worlde>.makeGuess to make a guess
 * 
 * 
 *               --Things To Do--
 * Currently only uses hello as word to guess. 
 * Need to determine best way to get guess from frontend (probably a POST to /guess from frontend routed with express)
 * Need to implement word selection. Requires choosing a random word from the database(eventually based on complexity and length)
 * 
 * 
 */
module.exports = class Wordle {

    /**Constructor of a wordle game requires the max number of guesses 
     * player can make before losing and the length of the word. 
     * The default for each of these is 5.
     * 
     * 
     * @constructor 
     * @param {Number} numGuesses - Max number of guesses player gets
     * @param {Number} wordLength - The number letters in the word.
     */
    constructor(numGuesses=5, wordLength=5) {
        this.WORD_LENGTH = wordLength;
        this.MAX_GUESSES = numGuesses
        this.matches = [];
    }


    /**
     * will eventually get random word from database based on complexity and length
     */
    newWord() {
        this.word = "hello";
    }

    newGame() {
        this.guesses = this.MAX_GUESSES;
        this.newWord();
    }

    makeGuess(guess) {
        if (!this.validGuess(guess)) return undefined; //need to figure out best way to handle invalid guess

        this.guesses -= 1;
        let win = false;
        let lose = false;

        //matches is an array with a number for each letter, 0-Match, 1-Letter is elsewhere, 2-letter not present
        let matches = this.compareGuess(guess.toLowerCase());

        //if it reduces to 0, every letter is a match
        if (matches.reduce((x, y) => { return x + y }) === 0)
            win = true;

        else if (this.guesses < 1)
            lose = true;

        return { win: win, lose: lose, matches: matches, guesses: this.guesses };

    }

    validGuess(guess) {
        if (guess.length !== this.WORD_LENGTH)
            return false;
        if (!/^[a-zA-Z]+$/.test(guess))
            return false;
        return true;
    }

    compareGuess(guess) {
        let matches = map.call(guess, (letter, i) => {
            if (letter === this.word.charAt(i)) return 0;
            if (this.word.includes(letter)) return 1;
            return 2;
        })
        return matches;
    }

}
