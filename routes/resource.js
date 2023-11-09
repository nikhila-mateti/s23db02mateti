var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var books_controller = require('../controllers/books');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// Book ROUTES ///
// POST request for creating a Book.
router.post('/books', books_controller.book_create_post);
// DELETE request to delete Book.
router.delete('/books/:id', books_controller.book_delete);
// PUT request to update Book.
router.put('/books/:id', books_controller.book_update_put);
// GET request for one Book.
router.get('/books/:id', books_controller.book_detail);
// GET request for list of all Book items.
router.get('/books', books_controller.book_list);
module.exports = router;