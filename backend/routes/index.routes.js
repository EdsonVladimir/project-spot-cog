const express = require('express');
const app = express();

app.use('/api', require('./usuario.routing'));
app.use('/api', require('./login.routing'));
app.use('/api', require('./artista.routing'));
app.use('/api', require('./albun.routing'));
app.use('/api', require('./cancion.routing'));
module.exports = app;