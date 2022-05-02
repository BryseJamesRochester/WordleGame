const router = require('express').Router();
let UserController = require('../controllers/user.controller');
let AuthenticationController = require('../controllers/authentication.controller')

//router.get('/:username', UserController.getUser);

router.post('/add', UserController.addUser);

router.post('/:username/login', AuthenticationController.login);

router.get('/:username/profile', UserController.getProfilePageInfo);

router.get('/:username/wordlist/all', UserController.getAllWordLists);

router.post('/:username/wordlist/add', UserController.addWordList);

router.delete('/:username/wordlist/delete', UserController.deleteWordList);

router.put('/:username/wordlist/enable', UserController.enableWordList);

//router.post('/:username/wordlist/disable', UserController.disableWordList);


module.exports = router;