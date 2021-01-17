const express = require('express')
const router = express.Router()
const SearchController =   require('../controller/search.controller');

router.get('/search', SearchController.Search);

module.exports = router ;