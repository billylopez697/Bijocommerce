var express = require('express');
var router = express.Router();
var empresa = require('../models/empresas');
var mongoose = require('mongoose');
const multipart = require('connect-multiparty');

const multipartMiddleware = multipart({
    uploadDir: './uploads'
});


router.post('/upload/:idempresa', multipartMiddleware, (req, res, next) => {
    empresa.update({
            _id: mongoose.Types.ObjectId(req.params.idempresa)
        }, {
            $push: {
                producto: {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.name,
                    descripcion: req.body.producto,
                    urlimg: req.body.urlimg,
                    precio: req.body.precio,
                    cantidad: req.body.precio
                }
            }
        }).then(respu => {
            res.send(respu);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});

router.post('/img/:idempresa', multipartMiddleware, (req, res, next) => {
    empresa.update({
            _id: mongoose.Types.ObjectId(req.params.idempresa)
        }, {
            $push: {
                imagen: {
                    _id: mongoose.Types.ObjectId(),
                    nombre: req.body.name,
                    descripcion: req.body.escripcion
                }
            }
        }).then(respu => {
            res.send(respu);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        });
});


router.get('/', function(req, res) {
    empresa.find({}, {})
        .then(respu => {
            res.send(respu);
            res.end();
        })
        .catch(error => {
            res.send(error);
            res.end();
        })
});
router.get('/:Idempresa', function(req, res) {
    empresa.find({
            _id: req.params.Idempresa,
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
router.post('/login', function(req, res) {
    var empresas = req.body.nombre
    var password = req.body.contrasenia
    console.log(empresa);
    console.log(password);
    empresa.findOne({ nombre: empresas }).then(respu => {
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
                mensaje: 'Nombre De la Incorrecto'
            };
            res.send(respuesta);
            res.end();
        })

});

module.exports = router;