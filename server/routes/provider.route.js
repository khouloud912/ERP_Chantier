
const express= require("express");
const Router = express.Router();
const t = require('../controllers/provider.controller');
Router.get('/getAllProviders', t.findAllProviders ) ;
Router.get('/getProvider/:id',t.findOne);
Router.delete('/deleteProvider/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);
Router.post('/addProvider',t.create);
Router.put('/UpdateProvider/:id',t.updateProvider);
module.exports=Router;
