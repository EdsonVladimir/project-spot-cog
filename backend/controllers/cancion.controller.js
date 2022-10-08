const Cancion = require('../model/cancion.model')

const crearCancion = async(req, res)=>{

    const cancion = new Cancion(req.body)
    try {
        let respuesta = await cancion.save();
        res.json({
            estado:1,
            mensaje:'Cancion registrado',
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

const obtenerCanciones = async (req, res) =>{
    try {
        let respuesta = await Cancion.find()
        res.json({
            estado:1,
            mensaje:'Obteniendo Cancions',
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
const obtenerCancion = async(req, res)=>{
    const {id} = req.params;
    try {
        let respuesta = await Cancion.findById(id)
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

const actualizarCancion = async(req, res)=>{
    const {id} = req.params;
    const {titulo, descripcion, idAlbun,idArtista, genero, autor} = req.body;
    try {
        let respuesta = await Cancion.updateOne({_id:id}, {$set:{titulo, descripcion, idAlbun,idArtista, genero, autor}})
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

const eliminarCancion = async(req, res)=>{
    const {id} = req.params;
    try {
        let respuesta = await Cancion.remove({_id:id})
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
    crearCancion,
    obtenerCanciones,
    obtenerCancion,
    actualizarCancion,
    eliminarCancion
}