"use strict";

var express = require('express');

var app = express();
app.use(express["static"]('./'));
app.get('/', function (req, res) {
  res.status(200).sendFile('accueilSalon.html', {
    root: __dirname
  });
});
app.get('/accueil', function (req, res) {
  res.status(300).redirect('/');
});
app.get('/apropos', function (req, res) {
  res.status(200).sendFile('aproposSalon.html', {
    root: __dirname
  });
});
app.use(function (req, res) {
  res.status(200).sendFile('accueilSalon.html', {
    root: __dirname
  });
});
app.listen(714, '0.0.0.0', function () {
  console.log("Serveur lancer sur localhost:714");
}); //https://dullish-jalen-nonaudible.ngrok-free.dev