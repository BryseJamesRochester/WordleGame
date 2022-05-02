const router = require('express').Router();
let GameController = require('../controllers/game.controller')

router.get('/:username/start', GameController.startGame);

router.post('/:username/guess', GameController.makeGuess);

module.exports = router;