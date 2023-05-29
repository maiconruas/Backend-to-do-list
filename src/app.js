const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();

mongoose.connect(config.connectionString);
app.use(router);

module.exports = app;