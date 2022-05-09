
let UserService = require('../services/user.service');
let GameService = require('../services/game.service');
let DefaultWordlistService = require('../services/defaultWordlist.service');
let CustomWordlistService = require('../services/customWordlist.service');


/**
 * Used to start a new wordle game. 
 * Retrieves wordlist from database and randomly selects a word, storing initial gamestate in Users "gamestate" field in db
 * Request Parameters:
 *  req.body.username - name of the user, default is 'guest'
 *  req.body.numGuesses - Number of guesses user has to guess the secret word, default is 6
 *  req.body.difficulty - Difficulty of words to use from default word list. Can be 'easy', 'hard', or 'all', default is 'all'
 */
const startGame = async function (req, res, next) {

    const useDefaultWordlist = req.body.useDefaultWordlist==undefined ? true : req.body.useDefaultWordlist;
    const difficulty = req.body.difficulty ? req.body.difficulty : 'all';
    const numGuesses = req.body.numGuesses ? req.body.numGuesses : 6;
    const username = req.params.username ? req.params.username : 'guest';

    try {
        let wordlist;
        if(useDefaultWordlist){
            wordlist = await DefaultWordlistService.getDefaultWordlist(difficulty);
        }
        else
            wordlist = await CustomWordlistService.createWordlist(username); 

        const selectedWord = Math.floor(Math.random() * wordlist.length);
        const secretWord = wordlist[selectedWord];

        //gamestate of a new game
        const gamestate = { secretWord: secretWord, remainingGuesses: numGuesses, result: "Active", pastGuesses: [] };
        UserService.updateUserGameState(username, gamestate)
            return res.status(200).json({ status: 200, message: `Game Started. Word is ${secretWord}`, secretWord: secretWord});
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
    const username = req.params.username;
    try {
        if (guess == undefined) throw Error("guess not defined");
        const gamestate = await UserService.getUserGameState(username);
        const {gamestate: newGamestate, matches} = GameService.checkGuess(gamestate, guess);
        if (newGamestate.invalid) {
            return res.status(200).json({ status: 200, message: `Invalid guess. Guesses remaining: ${gamestate.remainingGuesses}` });
        } else {
            await UserService.updateUserGameState(username, newGamestate)
            return res.status(200).json({ status: 200, matches:matches, gamestate:newGamestate });
        }
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports = { startGame, makeGuess };