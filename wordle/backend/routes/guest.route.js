const router = require('express').Router();
let GuestController = require('../controllers/guest.controller')

router.post('/new', GuestController.newGuest);

module.exports = router;