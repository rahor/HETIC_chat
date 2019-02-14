/* 
Imports
*/
const { Router } = require('express');
const FrontRouterClass = require('./frontRoute');
const AuthRouterClass = require('./auth/auth.route');
//

/* 
Define globale routers
- The "mergeParams: true" enable to parse parameters true routers class
*/
const mainRouter = Router({ mergeParams: true });
const apiRouter = Router({ mergeParams: true });
mainRouter.use('/', apiRouter);
//

/*
Define specific routers
*/
const frontRouter = new FrontRouterClass();
mainRouter.use('/', frontRouter.init());

const authRouter = new AuthRouterClass();
apiRouter.use('/auth', authRouter.init());
//

/* 
Export 
*/
module.exports = { mainRouter };
//