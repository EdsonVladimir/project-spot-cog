const {Router} = require('express');
const router = Router();
const upload = require('../middlewares/storage')
const { crearUsuario, obtenerUsuarios, obtenerUsuario, actualizarUsuario, eliminarUsuario, asignarImagen} = require('../controllers/usuario.controller')
const {validarJWT} = require("../middlewares/validar-jwt");

router.post('/usuario', crearUsuario);
router.get('/usuario', obtenerUsuarios);
router.get('/usuario/:id', obtenerUsuario);
router.put('/usuario/:id', [validarJWT], actualizarUsuario);
router.delete('/usuario/:id', [validarJWT], eliminarUsuario);
router.post('/imagen/:id', upload.single('imagen'),asignarImagen);
module.exports = router;