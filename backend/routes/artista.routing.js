const {crearArtista, actualizarArtista,   obtenerArtistas,
    obtenerArtista} = require('../controllers/artista.controller');
const {Router} = require('express');
const router = Router();
router.post('/artista', crearArtista);
router.put('/artista/:id', actualizarArtista)
router.get('/artista', obtenerArtistas)
router.get('/artista/:id', obtenerArtista)
module.exports = router;
