var express = require('express');
var cors = require('cors'); //Para gestionar politicas de dominios cruzados
var bodyParser = require('body-parser');
var database = require('./modules/database');
var usuarioRouter = require('./routers/usuarios-router');
var loginRouter = require('./routers/login-router');
var empresa = require('./routers/empresas-router');
const fileUpload = require('express-fileupload');
const path = require('path');
var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(8888, () => {
    console.log('Servidor del backend levantado en 8888');
});



app.get('/', function(req, res) {
    res.send("hola mundo no ");
});
app.use('/administracion', usuarioRouter);
app.use('/login', loginRouter);
app.use('/empresas', empresa);