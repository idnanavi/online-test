const express = require('express')
const router = express.Router()
const HomeController =   require('../controller/home.controller');

router.get('/', HomeController.Welcome);

module.exports = router ;