const router = require('express').Router();
let UserController = require('../controllers/user.controller');

router.post('/add', UserController.addUser);

router.get('/', UserController.getUser);

module.exports = router;