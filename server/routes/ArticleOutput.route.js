
const express= require("express");
const Router = express.Router();
const t = require('../controllers/ArticleOutput.controller');
Router.get('/getAllArticleOutput', t.findAllArticleOutput ) ;
Router.get('/getArticleOutput/:id',t.findOne);
Router.delete('/deleteArticleOutput/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);
Router.post('/addArticleOutput',t.create);
Router.put('/UpdateArticleOutput/:id',t.updateArticleOutput);
module.exports=Router;
