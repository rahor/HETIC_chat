/*
Import
*/
require('dotenv').config();
const express = require('express');
const path = require('path');
const ejs = require('ejs');
const bodyParser = require('body-parser');

const mongo = require('./services/mongo.serv');
/* 
Config
*/

// // import de la route
const { mainRouter } = require('./routes/mainRoute');

let front = require('./routes/frontRoute');
// let api = require('./routes/apiRoute');

//Definir le Port
const server = express(); 
const port = process.env.PORT; //présent dans le .env

/*
Server initialisation
*/
   


/*
Start
 */
// Lancer le server

class ServerClass{
    init(){

    // //=> Body Parser
    server.use(bodyParser.json({limit: '10mb'}));
    server.use(bodyParser.urlencoded({ extended: true }));    
        
     //Template ejs pour le moteur de rendu
     server.set('view engine', 'ejs');

    //Config du dossier client et de la route pour les vues
    server.set( 'views', __dirname + '/www' ); //l'endroit ou trouver les vues
    server.use( express.static(path.join(__dirname + '/www')) ); 
     
    //Configuration des routes
    // server.use('/api', apiRouter);
    // server.use('/', front);
    server.use('/', mainRouter);

    this.launch();
    }

    launch(){
        server.listen( port, () => console.log('Le serveur est lancé sur le port ' + port) );
    }
}
new ServerClass().init();
