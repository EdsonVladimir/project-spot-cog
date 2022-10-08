const {Router} = require('express');
const router = Router();
const {validarJWT} = require("../middlewares/validar-jwt");
const {crearAlbun, obtenerAlbuns, obtenerAlbun, actualizarAlbun, eliminarAlbun} = require("../controllers/albun.controller");

router.post('/albun',[validarJWT], crearAlbun);
router.get('/albun',[validarJWT], obtenerAlbuns);
router.get('/albun/:id',[validarJWT], obtenerAlbun);
router.put('/albun/:id', [validarJWT], actualizarAlbun);
router.delete('/albun/:id', [validarJWT], eliminarAlbun);
module.exports = router;