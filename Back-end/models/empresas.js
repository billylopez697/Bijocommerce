var mongoose = require('mongoose');
var esquema = new mongoose.Schema({
    nombre: String,
    contrasenia: String,
    nav: String,
    foo: String,
    descripcion: String,
    producto: Array,
    imagen: Array,
    video: Array,
    img: String,
    suspendido: String
});

module.exports = mongoose.model('empresas', esquema);