const {Router} = require('express');
const router = Router();
const {validarJWT} = require("../middlewares/validar-jwt");
const {crearCancion, obtenerCanciones, obtenerCancion, actualizarCancion, eliminarCancion} = require("../controllers/cancion.controller");


router.post('/cancion',[validarJWT], crearCancion);
router.get('/cancion',[validarJWT], obtenerCanciones);
router.get('/cancion/:id',[validarJWT], obtenerCancion);
router.put('/cancion/:id', [validarJWT], actualizarCancion);
router.delete('/cancion/:id', [validarJWT], eliminarCancion);
module.exports = router;