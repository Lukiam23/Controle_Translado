const bodyParser = require('body-parser')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')


app.use(cors())

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

const usuariosRoutes = require('./routes/usuarioRoutes')
app.use('/',usuariosRoutes);

const veiculoRoutes = require('./routes/veiculoRoutes')
app.use('/',veiculoRoutes);

const destinoRoutes = require('./routes/destinoRoutes')
app.use('/',destinoRoutes);

const transladoRoutes = require('./routes/transladoRoutes')
app.use('/',transladoRoutes);

module.exports = app;