
const express= require("express");
const Router = express.Router();
const t = require('../controllers/abscence.controller');
Router.get('/getAllAbscence', t.findAllAbscence ) ;
Router.get('/getAbscence/:id',t.findOne);
Router.delete('/deleteAbscence/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);
Router.post('/addAbscence',t.create);
Router.put('/UpdateAbscence/:id',t.updateAbscence);
module.exports=Router;
