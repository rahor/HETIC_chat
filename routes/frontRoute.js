/*
Config
*/

let express = require('express');
let router = express.Router();

// Configuration de la route 
router.get('/',(req, res)=> { //Request et reponse

    //Envoit du fichier index
    res.render('index', {title: "Salut", subTitle: "Bienvenue"});
});

// Export du module
module.exports = router; 