const jwt = require('jsonwebtoken');

const generarJWT =  async(data = {})=>{

    return new Promise((resolve, reject) =>{
        jwt.sign(data, process.env.LLAVESECRETA, {
            expiresIn: '72h'
        }, (err, token)=>{
            if(err){
                reject('No se pudo generar el token')
            } else {
                resolve(token);
            }
        })
    })

}

module.exports = {
    generarJWT
}