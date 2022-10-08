const mongoose = require('mongoose');

const albunSchema = new mongoose.Schema({
    titulo:{
        type:String,
        require:true
    },
    descripcion:{
        type:String,
        require: true
    },
    idArtista:{
        type:String,
        require:true
    },
    imagen:{
        type:String,
        default:'../public/imagenes/avatar.png'
    },
    fecha_reg:{
        type:Date,
        default: Date.now()
    }
})

const Albun = mongoose.model('Albun', albunSchema)
module.exports = Albun;