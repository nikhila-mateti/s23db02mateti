var express = require('express');
const books_controllers= require('../controllers/books');
var router = express.Router();
/* GET costumes */
router.get('/', books_controllers.book_view_all_Page);
module.exports = router;

