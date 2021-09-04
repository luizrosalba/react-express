const express = require('express');
router = express.Router();
const apiController = require('../controllers/apicontroller');

var path = require('path');
const fs = require("fs")
//const uuid = require("uuid");
//const multer = require("multer");


/////////////////////
/* Route           */
/////////////////////

// middleware de log de data da consulta 
router.use(function timeLog(req, res, next) {
  var fullTime = new Date().toLocaleTimeString('en-US')
  let day = new Date().getDate();
  let month = new Date().getMonth();
  let year = new Date().getFullYear();
  console.log('Time: ', day,'/', month,'/', year, fullTime, req.method, req.url );
  next();
});

// verificar se o servidor está online 
router.get('/isAlive', function(req, res) {
  res.status(200).send('Server Alive');
});

// rota exemplo de controlador
router.get('/exemplo', function(req, res) {
  apiController.getOne(req, res).then(
    (ans)=> 
      res.status(200).send(ans)
  )
  res.status(505)
});

// For invalid routes MUST be last function 
router.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

module.exports = router;