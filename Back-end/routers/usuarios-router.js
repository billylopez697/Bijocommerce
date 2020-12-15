var express = require('express');
var router = express.Router();
var admi = require('../models/usuarios');
var mongoose = require('mongoose');
router.get('/', function(req, res) {
    admi.find({}, { _id: true, usuario: true, contrasenia: true })
        .then(respu => {
            res.send(respu);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })

});

router.get('/:Idadmi', function(req, res) {
    admi.find({
            _id: req.params.Idadmi,
        }, {})
        .then(respu => {
            res.send(respu[0]);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })

});

router.post('/', function(req, res) {
    let u = new admi({
        nombre: req.body.nombre,
        apellido: req.body.apellido,
        usuario: req.body.usuario,
        contrasenia: req.body.contrasenia,
        celular: req.body.celular
    });
    u.save().then(result => {
        res.send(result);
        res.end();
    }).catch(error => {
        res.send(error);
        res.end();
    });
});

module.exports = router;