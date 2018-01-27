const sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const robots = require('express-robots-txt');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const staticRouter = require('./routes/index');

const app = express();
// enable ssl redirect
app.use(sslRedirect());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.moment = require('moment');

app.use(favicon(path.join(__dirname, './../public/img', 'favicon.ico')));
app.use(robots({UserAgent: '*', Disallow: '/img/', CrawlDelay: '5', Sitemap: 'https://inyacht.cz/sitemap.xml'}));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

// ======= controllers start =========
app.use('/', staticRouter);
// ======= controllers end =========

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = err;//req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('pages/oops', { config: {}, error: err });
});

module.exports = app;
