
const express= require("express");
const Router = express.Router();
const t = require('../controllers/ArticleInput.controller');
Router.get('/getAllArticleInputs', t.findAllArticleInputs ) ;
Router.get('/getArticleInput/:id',t.findOne);
Router.delete('/deleteArticleInput/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);
Router.post('/addArticleInput',t.create);
Router.put('/UpdateArticleInput/:id',t.updateArticleInput);
module.exports=Router;