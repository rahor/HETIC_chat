/* 
Imports
- The "mergeParams: true" enable to parse parameters true routers class
*/
const express = require('express');
const authRouter = express.Router({ mergeParams: true });
//

/* 
Definition 
*/
class AuthRouterClass {


constructor() {};

routes(){

    // Route AUTH 
    authRouter.post('/', (req, res) => {
        res.json('HATEAOS for api/auth')
    })
};

// Initialize routes
init(){
    this.routes();
    return authRouter;
};
};
//

/*
Export
*/
module.exports = AuthRouterClass;
//