const router = require('express').Router();
let GameController = require('../controllers/game.controller')

router.post('/start', GameController.startGame);

router.post('/guess', GameController.makeGuess);

module.exports = router;