var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
const connectionString = process.env.MONGO_CON;
//console.log(process.env.MONGO_CON);
const mongoose = require('mongoose');

mongoose.connect(connectionString, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

//Get the default connection
var db = mongoose.connection;
//Bind connection to error event
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once("open", function(){
console.log("Connection to DB succeeded")});

var book = require("./models/books");

async function recreateDB(){
  // Delete everything
  await book.deleteMany({}, { maxTimeMS: 10000 });
  let instance1 = new book({ title : "To Kill a Mockingbird", author: "Harper Lee", publishedYear: 1960});
  instance1.save().then(doc=>{
  console.log("First object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance2 = new
  book({  title: "The Hunger Games", author: "Suzanne Collins", publishedYear: 2008});
  instance2.save().then(doc=>{
  console.log("Second object saved")}
  ).catch(err=>{
  console.error(err)
  });
  let instance3 = new
  book({ title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling", publishedYear: 1997});
  instance3.save().then(doc=>{
  console.log("Third object saved")}
  ).catch(err=>{
  console.error(err)
  });
  }
  let reseed = true;
  if (reseed) {recreateDB();}

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var booksRouter = require('./routes/books');
var boardRouter = require('./routes/board');
var chooseRouter = require('./routes/choose');
var resourseRouter = require('./routes/resource');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/books', booksRouter);
app.use('/board', boardRouter);
app.use('/choose', chooseRouter);
app.use('/resource',resourseRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
