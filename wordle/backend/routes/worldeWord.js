const router = require('express').Router();
let WordleWord = require('../models/wordleWord.model');

router.route('/').get((req, res) => {
    WordleWord.find()
      .then(words=>res.json(words))
      .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req,res) => {
    const word = req.body.word;
    
    const newWord = new WordleWord({word});

    newWord.save()
        .then(()=> res.json('Word added'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;