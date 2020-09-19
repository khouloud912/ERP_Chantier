
const express= require("express");
const Router = express.Router();
const t = require('../controllers/categorie.controller');
Router.get('/getAllCategories', t.findAllCategories) ;
Router.get('/getCategorie/:id',t.findOne);
Router.delete('/deleteCategorie/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);
Router.post('/addCategorie',t.create);
Router.put('/UpdateCategorie/:id',t.updateCategorie);
module.exports=Router;

