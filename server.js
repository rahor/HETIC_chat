/*
Import
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

/* 
Config
*/

// import de la route
let front = require('./routes/frontRoute');

//Definir le Port
const server = express(); 
const port = process.env.PORT; //présent dans le .env

//Config du dossier client et de la route pour les vues
server.set( 'views', __dirname + '/www' ); //l'endroit ou trouver les vues
server.use( express.static(path.join(__dirname + '/www')) ); 

 //Template ejs pour le moteur de rendu
server.set('view engine', 'ejs');

//Configuration de la route
server.use('/', front);



/*
Start
 */
// Lancer le server
server.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );