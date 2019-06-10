require('dotenv').config();

// Connecting to MongoDB cluster with Mongoose
const mongoose = require('mongoose');
mongoose.connect(process.env.DB_URI, {
  auth: {
    user: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
  },
  useNewUrlParser: true
}).catch(err => console.error(`ERROR: ${err}`));

const express = require(`express`);

const app = express();

//Adding cookies and sessions support to our app
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

app.use(cookieParser());

app.use(session({
  secret: (process.env.secret || 'boorakacha'),
  cookie: {
    max: 108000000
  },
  resave: true,
  saveUninitialized: true
}));

app.use(flash());
app.use((req, res, next) => {
  res.locals.flash = res.locals.flash || {};
  res.locals.flash.success = req.flash('success') || null;
  res.locals.flash.error = req.flash('error') || null;

  next();
});
//Body Parser which will make reading request bodies MUCH easier
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


//view configuration 
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use('/css', express.static('assets/stylesheets'));
app.use('/js', express.static('assets/javascripts'));
app.use('/images', express.static('assets/images'));

//Our Authentication Helper stuff utility things
const isAuthenticated = (req) => {
  return req.session && req.session.userId;
};

app.use((req, res, next) => {
  req.isAuthenticated = () => {
    if (!isAuthenticated(req)) {
      req.flash('error', `You are not permitted to do this action.`);
      res.redirect('/');
    }
  }

  res.locals.isAuthenticated = isAuthenticated(req);
  next();
});

//our routes
const routes = require('./routes.js');
app.use('/', routes);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}`));