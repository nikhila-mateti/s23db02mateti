var book = require('../models/books');
// List of all Costumes
exports.book_list = async function (req, res) {
    try {
        theBooks = await book.find();
        res.send(theBooks);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

//views
exports.book_view_all_Page = async function (req, res) {
    try {
        theBooks = await book.find();
        res.render('books', { title: 'Book Search Results', results: theBooks });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

exports.book_create_post = async function(req, res) {
    console.log(req.body)
    let document = new book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.title = req.body.title;
    document.author = req.body.author;
    document.publishedYear = req.body.publishedYear;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// List of all Books
/*exports.book_list = function (req, res) {
    res.send('NOT IMPLEMENTED: Book list');
};*/
// for a specific Book.
exports.book_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await book.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
// Handle Book create on POST.
/*exports.book_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: Book create POST');
};*/
// Handle Book delete form on DELETE.
exports.book_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: Book delete DELETE ' + req.params.id);
};
// Handle Book update form on PUT.
exports.book_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await book.findById( req.params.id)
    // Do updates of properties
    if(req.body.title) toUpdate.title = req.body.title;
    if(req.body.author) toUpdate.author = req.body.author;
    if(req.body.publishedYear) toUpdate.publishedYear = req.body.publishedYear;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };


    