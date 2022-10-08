const path = require("path");
const {v4: uuidv4} = require('uuid');

const subirImagen = (files, formatosValidos = ['png','jpg','jpeg'], carpeta = '') =>{
    return new Promise((resolve, reject)=>{
        const { imagen } = files;
        const nombreImagen = imagen.name.split('.');
        const extencion = nombreImagen[nombreImagen.length-1];
        if(!formatosValidos.includes(extencion)){
            return reject(`La extencion ${extencion} no esta permitida`)
        }
        const nombreTemp = uuidv4()+'.'+extencion;
        console.log(nombreTemp);
    })
}

module.exports = {
    subirImagen
}