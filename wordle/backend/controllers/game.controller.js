let WordListService = require('../services/wordlist.service');    
let Wordle = require("../wordleGame");

let wordleGame;

const startGame = async function(req, res, next) {
    let difficulty = req.body.difficulty ? req.body.difficulty : 'all';
    let numGuesses = req.body.numGuesses ? req.body.numGuesses : 5;
    let wordLength = req.body.wordLength ? req.body.wordLength : 5;
    try {
        let wordList = await WordListService.getDefaultWordList(difficulty);
        wordleGame = new Wordle(numGuesses, wordLength, wordList);
        wordleGame.newGame();
        return res.status(200).json({ status: 200, message: `Game Started. Word is ${wordleGame.word}`});
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const makeGuess = async function(req, res, next) {
    const guess = req.body.guess;
    let { win, lose, matches, invalid } = wordleGame.makeGuess(guess);
    if (invalid) {
        res.send(`Invalid guess, Guesses remaining: ${wordleGame.guesses}`);
    } else {
        res.send(`win:${win} lose:${lose} matches:${matches} guesses:${wordleGame.guesses}`);
    }
}

module.exports = {startGame, makeGuess};