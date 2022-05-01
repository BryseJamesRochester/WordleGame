const router = require('express').Router();
let UserController = require('../controllers/user.controller');

router.post('/add', UserController.addUser);

router.get('/', UserController.getUser);

router.post('/wordlist/add', UserController.addWordList);

router.post('/wordlist/all', UserController.getAllWordLists);

router.post('/wordlist/delete', UserController.deleteWordList);

router.post('/wordlist/enable', UserController.enableWordList);

router.post('/wordlist/disable', UserController.disableWordList);


module.exports = router;