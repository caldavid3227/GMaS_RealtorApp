const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser'); 
const ReactDOM = require('react-dom/server');
const Router = require('react-router');
const request = require('request');
const Provider = require('react-redux').Provider;
const compression = require('compression');


dotenv.load({silent: true});

const app = express();

const PORT = process.env.PORT || 2016;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});