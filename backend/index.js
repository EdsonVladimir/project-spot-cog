const express = require('express');
const cors = require('cors');
const app = express();
var bodyParser = require('body-parser')
const dotenv = require('dotenv');
const fileUpload = require("express-fileupload");
const ConexionDB = require('./config/config-mongo');
//app.use(express.json());
app.use(cors());
dotenv.config();
ConexionDB.connect();
app.use(bodyParser.urlencoded({ extended: true }))

// parse application/json
app.use(bodyParser.json())
app.use(require('./routes/index.routes'));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}))
/** llama a la variable PORT de nuestro archivo .env */
const PORT = process.env.PORT;
console.log('Servicio e3scuchando el puert', PORT)

app.listen(PORT);