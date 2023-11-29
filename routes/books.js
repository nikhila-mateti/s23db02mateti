var express = require('express');
const books_controllers= require('../controllers/books');
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
/* GET costumes */
router.get('/', books_controllers.book_view_all_Page);

/* GET book */
router.get('/detail', books_controllers.book_view_one_Page);

/* GET create book page */
router.get('/create',secured, books_controllers.book_create_Page);

/* GET delete book page */
router.get('/delete',secured, books_controllers.book_delete_Page);

/* GET create update page */
router.get('/update',secured, books_controllers.book_update_Page);


module.exports = router;

