const express= require("express");
const Router = express.Router();
const t = require('../controllers/ligne_commande.controller');
//Router.get('/getCommandeLigne', t.findAllCommandeLigne ) ;
Router.get('/getDetailCommandLigne/:id', t.seeDetailsCommandeLigne);

module.exports=Router;
