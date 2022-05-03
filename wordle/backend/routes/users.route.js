const router = require('express').Router();
let UserController = require('../controllers/user.controller');
let AuthenticationController = require('../controllers/authentication.controller')

//router.get('/:username', UserController.getUser);

router.post('/:username/add', UserController.addUser);

router.post('/:username/login', AuthenticationController.login);

router.get('/:username/profile', UserController.getProfilePageInfo);

router.get('/:username/wordlist/all', UserController.getAllWordlists);

router.post('/:username/wordlist/add', UserController.addWordlist);

router.delete('/:username/wordlist/delete', UserController.deleteWordlist);

router.put('/:username/wordlist/enable', UserController.enableWordlists);

//router.post('/:username/wordlist/disable', UserController.disableWordlist);


module.exports = router;