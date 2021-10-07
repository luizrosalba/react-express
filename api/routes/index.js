const express = require('express');
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

// For invalid routes MUST be last function 
router.get('*', (req, res) => {
  res.send('404! This is an invalid URL.');
});

module.exports = router;