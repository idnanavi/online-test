const express = require('express')
const router = express.Router()
const DetailController =   require('../controller/detail.controller');

router.get('/detail', DetailController.Detail);

module.exports = router ;