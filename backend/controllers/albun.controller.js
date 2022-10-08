const Albun = require('../model/albun.model')

const {subirImagen} = require("../helpers/subir-imagen");
const crearAlbun = async(req, res)=>{

    const albun = new Albun(req.body)
    try {
        let respuesta = await albun.save();
        res.json({
            estado:1,
            mensaje:'Albun registrado',
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

const obtenerAlbuns = async (req, res) =>{
    try {
        let respuesta = await Albun.find()
        res.json({
            estado:1,
            mensaje:'Obteniendo Albuns',
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
const obtenerAlbun = async(req, res)=>{
    const {id} = req.params;
    try {
        let respuesta = await Albun.findById(id)
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

const actualizarAlbun = async(req, res)=>{
    const {id} = req.params;
    const {titulo, descripcion, idArtista} = req.body;
    try {
        let respuesta = await Albun.updateOne({_id:id}, {$set:{titulo, descripcion, idArtista}})
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

const eliminarAlbun = async(req, res)=>{
    const {id} = req.params;
    try {
        let respuesta = await Albun.remove({_id:id})
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
    console.log(req.files)
    if(!req.files || Object.keys(req.files).length === 0 || !req.files.imagen) {
        return res.status(400).json({
            codigo:0,
            mensaje:"No contiene imagen"
        })
    }
    const pathImagen = await subirImagen(req.files, undefined, "imagen" )
    console.log(pathImagen, "esta deberia ser la imagen")
}


module.exports = {
    crearAlbun,
    obtenerAlbuns,
    obtenerAlbun,
    actualizarAlbun,
    eliminarAlbun
}