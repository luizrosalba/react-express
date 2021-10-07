require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
const express= require('express');
const verifyJWT= require('../middlewares/verifyJWT')
router = express.Router();
const apiController = require('../controllers/apicontroller');

var path = require('path');
//const uuid = require("uuid");
//const multer = require("multer");
const fs = require("fs")


/////////////////////
/* Route           */
/////////////////////

// middleware de log de data da consulta 
router.use(function timeLog(req, res, next) {
  var fullTime = new Date().toLocaleTimeString('en-US')
  let day = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  console.log('Time: ', day,'/', month+1 ,'/', year, fullTime, req.method, req.url );
  next();
});

// verificar se o servidor está online 
router.get('/isAlive', function(req, res) {
  res.status(200).send('Server Alive');
});

//authentication
router.post('/login', (req, res, next) => {
    //esse teste abaixo deve ser feito no seu banco de dados
    if(req.body.user === 'luiz' && req.body.password === '123'){
      //auth ok
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300 // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    res.status(500).json({message: 'Login inválido!'});
})

///Se quiser adicionar uma camada a mais de segurança, 
///você pode ter uma blacklist de tokens que fizeram logout, 
//para impedir reuso deles depois do logout realizado.

/// Aqui apenas dizemos ao requisitante para anular o token, 
///embora esta rota de logout seja completamente opcional uma 
///vez que no próprio client-side é possível destruir o cookie ou 
//localstorage de autenticação e com isso o usuário está automaticamente
// deslogado. Se nem o client-side ou o server-side destrua o token, ele irá expirar sozinho em 5 minutos.

router.post('/logout', function(req, res) {
    res.json({ auth: false, token: null });
})

/// protected route 
router.get('/clientes', verifyJWT, (req, res, next) => { 
    console.log("Retornou todos clientes!");
    res.json([{id:1,nome:'luiz'}]);
})


// For invalid routes MUST be last function 
router.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

module.exports = router;