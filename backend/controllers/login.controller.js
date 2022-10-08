
const Usuario = require('../model/usuario.model');
const bcrypt = require('bcrypt');
const {generarJWT} = require("../helpers/generar-jwt");
const loginController = async(req, res)=>{
    const { par_usuario, par_contrasenia} = req.body;
    try {
        const respuesta = await Usuario.findOne({usuario:par_usuario})
        if(!respuesta){
           return res.status(400).json({
                estado:0,
                mensaje: "Verifique usuario contraseña",
            })
        }
        const validarContrsenia = await bcrypt.compareSync(par_contrasenia, respuesta.contrasenia);
        if(!validarContrsenia){
            return res.status(400).json({
                estado:0,
                mensaje: "Verifique usuario contraseña",
            })
        };
        const usuario = { usuario:respuesta.usuario, correo:respuesta.correo };
        const token = await generarJWT(usuario);
        //generar el topken
        res.status(200).json({
            estado:1,
            mensaje: "usuario correcto",
            contenido: {usuario, token}
        })
    } catch (err) {
        res.status(500).json({
            estado:1,
            mensaje: "usuario correcto",
            contenido:err
        })
    }
}

module.exports = {
    loginController
}