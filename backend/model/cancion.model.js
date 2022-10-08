const mongoose = require('mongoose');
const {isValidObjectId} = require("mongoose");



const cancionScherma = new mongoose.Schema({
    titulo: {
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require:true
    },
    idAlbun:{
        type:String,
        require:true
    },
    idArtista:{
        type:String,
        require:true
    },
    genero:{
        type:String,
        require:true
    },
    autor:{
        type:String
    },
    cancion:{
        type:String,

    },
    fecha_reg:{
        type:Date,
        default:Date.now()
    }
})

const Cancion = mongoose.model('Cancion', cancionScherma);

module.exports = Cancion;