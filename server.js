

var createError = require('http-errors');
var express = require('express');
var path = require('path');
const expressLayouts = require('express-ejs-layouts')
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');
// var passport = require('passport')
// var session = require('express-session');

// var SQLiteStore = require('connect-sqlite3')(session);

var indexRouter = require('./routes/index');
var taskRouter = require('./routes/tasks')
// var authRouter = require('./routes/auth');

var app = express();

// app.locals.pluralize = require('pluralize');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.set('layout', 'layouts/layout')



app.use('/public',express.static('public'));
// app.use(logger('dev'));
app.use(expressLayouts)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/', taskRouter)
// app.use('/', authRouter);

//catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// error handlersssss
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Connected to port 3000')
})


module.exports = app;
