const express = require('express')

const router = express.Router();

userController = require('../controllers/user');


router.post('/login', userController.login);

router.post('/signup', userController.signup);

router.get('/', userController.getAllUsers)

module.exports = router;