var express = require('express');
var router = express.Router();
var usuario = require('../models/usuarios');
var mongoose = require('mongoose');
const { use } = require('./usuarios-router');

router.post('/', function(req, res) {
    var username = req.body.usuario
    var password = req.body.contrasenia

    usuario.findOne({ usuario: username }).then(respu => {
            if (respu.contrasenia == password) {
                res.send({ error: false, mensaje: { _id: respu._id, usuario: respu.usuario } });
                res.end();
            } else {
                respuesta = {
                    error: true,
                    codigo: 400,
                    mensaje: 'Contraseña Incorrecta'
                };
                res.send(respuesta);

            }
        })
        .catch(error => {
            respuesta = {
                error: true,
                codigo: 400,
                mensaje: 'Usuario Incorrecto'
            };
            res.send(respuesta);
            res.end();
        })
});
module.exports = router;