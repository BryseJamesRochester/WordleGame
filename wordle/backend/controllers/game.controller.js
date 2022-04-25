
let UserService = require('../services/user.service');
let GameService = require('../services/game.service');
let DefaultWordListService = require('../services/defaultWordList.service');
let CustomWordListService = require('../services/customWordList.service');


/**
 * Used to start a new wordle game. 
 * Retrieves wordlist from database and randomly selects a word, storing initial gamestate in Users "gamestate" field in db
 * Request Parameters:
 *  req.body.username - name of the user, default is 'guest'
 *  req.body.numGuesses - Number of guesses user has to guess the secret word
 *  req.body.difficulty - Difficulty of words to use from default word list. Can be 'easy', 'hard', or 'all', default is 'all'
 */
const startGame = async function (req, res, next) {
    let difficulty = req.body.difficulty ? req.body.difficulty : 'all';
    let numGuesses = req.body.numGuesses ? req.body.numGuesses : 5;
    let username = req.body.username ? req.body.username : 'guest';
    try {
        let wordList = await DefaultWordListService.getDefaultWordList(difficulty);

        let selectedWord = Math.floor(Math.random() * wordList.length);
        let secretWord = wordList[selectedWord];

        //gamestate of a new game
        let gamestate = { secretWord: secretWord, remainingGuesses: numGuesses, result: "In Progress", pastGuesses: [] };
        if (UserService.updateUserGameState(username, gamestate))
            return res.status(200).json({ status: 200, message: `Game Started. Word is ${secretWord}` });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

/**
 * Used to make a guess in an existing wordle game. Game must be started before this can be called.
 * Request Parameters:
 *  req.body.username - name of the user
 *  req.body.guess - The user's guess
 */
const makeGuess = async function (req, res, next) {
    const guess = req.body.guess;
    const username = req.body.username;
    try {
        let gamestate = await UserService.getUserGameState(username);
        let newGamestate = GameService.checkGuess(gamestate, guess);
        if (newGamestate.invalid) {
            return res.status(200).json({ status: 200, message: `Invalid guess. Guesses remaining: ${gamestate.remainingGuesses}` });
        } else {
            if (await UserService.updateUserGameState(username, newGamestate))
                return res.status(200).json({ status: 200, message: `success. new game state: ${newGamestate}` });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = { startGame, makeGuess };