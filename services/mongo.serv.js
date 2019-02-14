/*
Import
*/

const mongoose =require('mongoose');
//

/*
Config
*/
    const mongoConnect = ()=> {
        //Nouvelle promesse
        return new Promise((resolve, reject) =>{
            //Connexion à MongoDB
            mongoose.connect(process.env.MONGO_URL, {
                userNewUrlParser: true //nouveau gestionnaire d'url (parsing d'url)
            })
            .then( db => resolve(db))
            .catch(err =>reject(err));
        });
    }
//

/*
Export
*/
    module.exports = mongoConnect;
//