let WordListService = require('../services/wordlist.service');    
let Wordle = require("../wordleGame");

let wordleGame;

const startGame = async function(req, res, next) {
    let difficulty = req.params.difficulty ? req.params.difficulty : 'all';
    let numGuesses = req.params.numGuesses ? req.params.numGuesses : 5;
    let wordLength = req.params.wordLength ? req.params.wordLength : 5;
    try {
        let wordList = await WordListService.getDefaultWordList(difficulty);
        wordleGame = new Wordle(numGuesses, wordLength, wordList);
        wordleGame.newGame();
        return res.status(200).json({ status: 200, message: "Game Started" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

const makeGuess = async function(req, res, next) {

}

module.exports = {startGame, makeGuess};