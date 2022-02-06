const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const app = express()

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const usuariosRoutes = require('./routes/usuarioRoute')
app.use('/',usuariosRoutes);

module.exports = app;