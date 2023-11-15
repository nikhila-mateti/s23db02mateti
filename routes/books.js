var express = require('express');
const books_controllers= require('../controllers/books');
var router = express.Router();
/* GET costumes */
router.get('/', books_controllers.book_view_all_Page);

/* GET book */
router.get('/detail', books_controllers.book_view_one_Page);

/* GET create book page */
router.get('/create', books_controllers.book_create_Page);

/* GET create update page */
router.get('/update', books_controllers.book_update_Page);

/* GET delete book page */
router.get('/delete', books_controllers.book_delete_Page);
module.exports = router;

