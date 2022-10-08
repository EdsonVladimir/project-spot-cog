const bcrypt = require('bcrypt');
const Usuario = require('../model/usuario.model');

const crearUsuario= async (req, res) =>{
const {par_usuario, par_contrasenia, par_correo} = req.body;

const usuario = new Usuario({
    usudsadsadario:par_usuario,
    contrasenia: bcrypt.hashSync(par_contrasenia, 10),
    correo:par_correo
})
try {
    let respuesta = await usuario.save();
    res.json({
        estado:1,
        mensaje:'Usuario registrado',
        contenido:respuesta
    })
} catch (err) {
    res.status(500).json({
        estado:0,
        mensaje:'No se pudo registrar',
        contenido:err
    })
}
}
const obtenerUsuarios = async (req, res) =>{
    try {
        let respuesta = await Usuario.find()
        res.json({
            estado:1,
            mensaje:'Obteniendo Usuarios',
            constenido:respuesta
        })
    } catch (err) {
        res.status(500).json({
            estado:0,
            mensaje:'Error al consultar los datos',
            contenido:err
        })
    }
}
// revisar por que no actualiza
const obtenerUsuario = async(req, res)=>{
    const {id} = req.params;
    try {
        let respuesta = await Usuario.findById(id)
        res.json({
            estado:1,
            mensaje:'usuario eliminado',
            constenido:respuesta
        })
    }catch (err){
        res.status(500).json({
            estado:0,
            mensaje:'Error al consultar los datos',
            contenido:err
        })
    }

}

const actualizarUsuario = async(req, res)=>{
    const {id} = req.params;
    const {par_usuario, par_correo} = req.body;
    try {
        let respuesta = await Usuario.updateOne({_id:id}, {$set:{usuario:par_usuario, correo:par_correo}})
        res.json({
            estado:1,
            mensaje:'usuario eliminado',
            constenido:respuesta
        })
    }catch (err){
        res.status(500).json({
            estado:0,
            mensaje:'Error al consultar los datos',
            contenido:err
        })
    }
}

const eliminarUsuario = async(req, res)=>{
    const {id} = req.params;
    try {
        let respuesta = await Usuario.remove({_id:id})
        res.json({
            estado:1,
            mensaje:'usuario eliminado',
            constenido:respuesta
        })
    }catch (err){
        res.status(500).json({
            estado:0,
            mensaje:'Error al consultar los datos',
            contenido:err
        })
    }
}
const asignarImagen= async(req, res)=>{
      const { id } = req.params;
    const { path } = req.file;
    try {
        let respuesta = await Usuario.updateOne({_id:id}, {$set:{imagen:path}})
        res.json({
            estado:1,
            mensaje:'usuario eliminado',
            constenido:respuesta
        })
    }catch (err){
        res.status(500).json({
            estado:0,
            mensaje:'Error al consultar los datos',
            contenido:err
        })
    }
}
module.exports = {
    crearUsuario,
    obtenerUsuarios,
    obtenerUsuario,
    actualizarUsuario,
    eliminarUsuario,
    asignarImagen
}