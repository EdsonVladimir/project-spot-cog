const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    usuario:{
        type: String,
        require:true
    },
    contrasenia:{
        type:String,
        require:true,
    },
    correo:{
        type:String,
        require:true,
        unique:true
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

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;