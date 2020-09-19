
const express= require("express");
const Router = express.Router();
const t = require('../controllers/reception.controller');
Router.get('/getAllReception', t.findAllReception ) ;
Router.get('/getReception/:id',t.findOne);
Router.delete('/deleteReception/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);
Router.post('/addReception',t.create);
Router.put('/UpdateReception/:id',t.updateReception);
module.exports=Router;
