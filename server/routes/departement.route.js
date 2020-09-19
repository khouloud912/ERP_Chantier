const express= require("express");
const Router = express.Router();
const t = require('../controllers/departement.controller');

Router.get('/getAlldepartement', t.findAllDepartement) ;
Router.get('/getDepartement/:id',t.findOne);

Router.delete('/deleteDepartement/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);

Router.post('/addDepartement',t.create);

Router.put('/UpdateDepartement/:id',t.update);
module.exports=Router;