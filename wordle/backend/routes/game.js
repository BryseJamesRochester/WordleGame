const router = require('express').Router();
let Wordle = require("../wordleGame")

//will be initialized to worldle game object on POST request to '/start'
//may not be the best way to store game on server
let wordle;

router.route('/start').post((req, res) => {
    const numGuesses = req.body.numGuesses;
    const wordLength = req.body.wordLength;

    //Will later come back to think if there is a better way to stor wordle object on server, maybe in db?
    wordle = new Wordle(numGuesses, wordLength);
    wordle.newGame();
    res.json('Game Started.');

});

router.route('/guess').post((req, res) => {
    const guess = req.body.guess;
    let { win, lose, matches, invalid } = wordle.makeGuess(guess);

    //need to connect with frontend devs to see if they want to handle win and loss logic on frontend or if it should be done here
    //also need to check exactly what data they want returned
    if (invalid) {

        res.send(`Invalid guess, Guesses remaining: ${wordle.guesses}`);

    }
    else {

        res.send(`win:${win} lose:${lose} matches:${matches} guesses:${wordle.guesses}`);

    }

    

});



module.exports = router;