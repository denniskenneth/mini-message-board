const path = require('node:path');
const express = require('express');
const indexRouter = require('./routers/indexRouter');

const app = express();
app.use(express.static(path.join(__dirname, '..', 'public')))
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// APP LEVEL MIDDLEWARE
app.use(express.urlencoded())

app.use(indexRouter);













module.exports = app;