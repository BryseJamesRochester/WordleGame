
let UserService = require('../services/user.service');
let GameService = require('../services/game.service');
let DefaultWordListService = require('../services/defaultWordList.service');
let CustomWordListService = require('../services/customWordList.service');


/**
 * Used to start a new wordle game. 
 * Retrieves wordlist(custom or default) from database and randomly selects a word.
 * Stores initial gamestate in Users "gamestate" field in db
 * Request Parameters:
 *  req.body.username - name of the user, default is 'guest'
 *  req.body.numGuesses - Number of guesses user has to guess the secret word
 *  req.body.difficulty - Difficulty of words to use from default word list. Can be 'easy', 'hard', or 'all', default is 'all'
 *  req.body.useDefaultWordList - Boolean determining wheter to use default word list or custom word list.
 */
const startGame = async function (req, res, next) {

    const useDefaultWordList = req.body.useDefaultWordList==undefined ? true : req.body.useDefaultWordList;
    const difficulty = req.body.difficulty ? req.body.difficulty : 'all';
    const numGuesses = req.body.numGuesses ? req.body.numGuesses : 5;
    const username = req.body.username ? req.body.username : 'guest';

    try {
        let wordList;
        if(useDefaultWordList){
            console.log(`using default. ${useDefaultWordList}`);
            wordList = await DefaultWordListService.getDefaultWordList(difficulty);

        }
        else
            wordList = await CustomWordListService.createWordList(username); 

        const selectedWord = Math.floor(Math.random() * wordList.length);
        const secretWord = wordList[selectedWord];

        //gamestate of a new game
        const gamestate = { secretWord: secretWord, remainingGuesses: numGuesses, result: "In Progress", pastGuesses: [] };
        UserService.updateUserGameState(username, gamestate)
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
        const gamestate = await UserService.getUserGameState(username);
        const newGamestate = GameService.checkGuess(gamestate, guess);
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