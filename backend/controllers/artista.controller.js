const Artista = require('../model/artista.model')

const crearArtista = async (req, res)=>{
  const {nombres, nombre_artistico,descripcion} = req.body;
  const artista = new Artista({
      nombres, nombre_artistico, descripcion
  })
    try {
        let respuesta = await artista.save();
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
const actualizarArtista = async (req, res)=>{
    const {id} = req.params;
    console.log(id)
    const {nombres, nombre_artistico, descripcion} = req.body;
    console.log(nombres, nombre_artistico, descripcion)
    const artista = new Artista({
        nombres, nombre_artistico, descripcion
    })
    try {
        let respuesta = await artista.updateOne({_id:id}, {$set:{nombres:nombres, nombre_artistico:nombre_artistico,descripcion: descripcion}})
        res.json({
            estado:1,
            mensaje:'Artista Actualizado',
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
const obtenerArtistas = async (req, res)=>{

    try {
        let respuesta = await Artista.find()
        res.json({
            estado:1,
            mensaje:'Artistas creados',
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
const obtenerArtista = async (req, res)=>{
    const {id}=req.params
    try {
        let respuesta = await Artista.findById(id)

        res.json({
            estado:1,
            mensaje:'Artistas creados',
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


module.exports = {
    crearArtista,
    actualizarArtista,
    obtenerArtistas,
    obtenerArtista
}