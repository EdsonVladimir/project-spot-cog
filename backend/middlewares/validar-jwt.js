const jwt = require('jsonwebtoken');

const validarJWT = async (req, res, next) =>{
    try {
        const token = req.header('token');
        if(!token){
            return res.status(401).json({
                estado:0,
                mensaje:"No existe token en la peticion!!"
            })
        }
        const { usuario, correo }= await jwt.verify(token, process.env.LLAVESECRETA)

        next();
    } catch (err) {
        return res.status(401).json({
            estado:0,
            mensaje:"Token no valido",
            contenido:err
        })
    }
}

module.exports = {
    validarJWT
}