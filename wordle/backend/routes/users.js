const router = require('express').Router();
let UserController = require('../controllers/user.controller');

router.post('/add', UserController.addUser);

router.get('/', UserController.getUser);

router.post('/wordlist/add', UserController.addWordList);

router.post('/wordlist/all', UserController.getAllWordLists);

router.post('/wordlist/delete', UserController.deleteWordListByName);

module.exports = router;