const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
//process.env.URL_DB
const ConexionDB = {
    connection:null,
    connect:()=>{
        if(this.connection) return this.connection;
        return mongoose.connect(process.env.URL_DB, {useUnifiedTopology: true,useNewUrlParser: true}).then(connection=>{
            this.connection = connection;
            console.log('Conexion s DB exitosa!!');
        }).catch(err=> console.log(err))
    }
}

module.exports = ConexionDB;
