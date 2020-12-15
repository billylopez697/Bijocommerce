var mongoose = require('mongoose');
var esquema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    celular: String,
    contrasenia: String,
    usuario: String
});

module.exports = mongoose.model('usuarios', esquema);