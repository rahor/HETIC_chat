/* 
Imports
- The "mergeParams: true" enable to parse parameters true routers class
*/
const express = require('express');
const authRouter = express.Router({ mergeParams: true });
//

 // Add service
 const { sendApiSuccessResponse, sendApiErrorResponse } = require('../../services/serverResponse');
 const { checkFields } = require('../../services/request.checker');
 const { registerUser } = require('./auth.controller');
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


// Route AUTH register user
authRouter.post('/register', (req, res) => {
    // Check if body is present
    if (typeof req.body === 'undefined' || req.body === null) { sendBodyError(res, 'No body data provided') }
        
    // Check mandatory fields
    const { miss, extra, ok } = checkFields(['firstName', 'lastName', 'email', 'password'], req.body);

    // Check the result
    if (!ok) { 
        // Error
        return sendApiErrorResponse(res, 'Bad fields provided', miss, extra) 
    }

    else{
        // Success
        return sendApiSuccessResponse(res, 'Provided fields are ok', null)
    }
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