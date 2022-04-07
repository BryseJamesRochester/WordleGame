"use strict";

const map = Array.prototype.map;


/**
 * A Wordle object is used to play a game of wordle.
 * Use wordle.newGame() to start the game, and <worlde>.makeGuess to make a guess
 * 
 * 
 *               --Things To Do--
 * Currently only uses hello as word to guess. 
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
    constructor(numGuesses=5, wordLength=5, wordList = ['hello', 'match']) {
        this.WORD_LENGTH = wordLength;
        this.MAX_GUESSES = numGuesses
        this.matches = [];
        this.wordList = wordList; 
    }


    /**
     * will eventually get random word from database based on complexity and length
     */
    newWord() {
        let selectedWord = Math.floor(Math.random() * (this.wordList.length - 1));
        this.word = this.wordList[selectedWord];
    }


    /** 
     * Initializes a new wordle game with the number of guesses set in the constructor. Picks a new word.
    */
    newGame() {
        this.guesses = this.MAX_GUESSES;
        this.newWord();
    }

    /**
     * Makes a guess at the word. Ensures guess is valid and comapres it against the word.
     * @param {string} guess - the guess
     * @returns An object containing various properties. 
     *          If guess is valid will return an object with {win, lose, matches}
     *          win - true if guess was correct
     *          lose - true if out of guesses
     *          matches - array with info about each letter(0-match, 1-letter is in the word but in wrong place, 2-letter not in word)
     */
    makeGuess(guess) {
        if (!this.validGuess(guess)) return {invalid:true}; //need to figure out best way to handle invalid guess
        if (this.guesses < 1) return {invalid:true};

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

        return { win: win, lose: lose, matches: matches};

    }


    /**
     * Checks the guess is valid. A guess is valid if it is the correct length and is made of letters.
     * @param {string} guess - guess to check
     * @returns a boolean indicating if it is a valid guess
     */
    validGuess(guess) {
        if (guess.length != this.WORD_LENGTH){
            return false;
        }
        if (!/^[a-zA-Z]+$/.test(guess)){
            return false;
        }
            
        return true;
    }

    /**
     * Does a letter by letter comparison of the guess and the word that is trying to be guessed
     * @param {string} guess - the guess
     * @returns array with info about each letter(0-match, 1-letter is in the word but in wrong place, 2-letter not in word)
     */
    compareGuess(guess) {
        let matches = map.call(guess, (letter, i) => {
            if (letter === this.word.charAt(i)) return 0;
            if (this.word.includes(letter)) return 1;
            return 2;
        })
        return matches;
    }

}
