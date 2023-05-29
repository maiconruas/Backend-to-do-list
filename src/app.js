const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router');
const config = require('./config');

const app = express();

// Connecta ao banco
mongoose.connect(config.connectionString);

app.use(express.json());
app.use(cors());
app.use(router);

module.exports = app;