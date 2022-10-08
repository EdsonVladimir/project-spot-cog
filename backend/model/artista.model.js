const mongoose = require('mongoose');

const ArtistaSchema = new mongoose.Schema({
    nombres : {
        type:String,
    },
    nombre_artistico:{
        type:String
    },
    descripcion:{
        type:String
    },
    imagen:{
        type:String,
        default:'../public/imagenes/avatar.png'
    },
    fecha_reg:{
        type:Date,
        default:Date.now()
    }
})

const Artista = mongoose.model('Artista', ArtistaSchema);

module.exports = Artista;