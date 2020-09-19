const express= require("express");
const Router = express.Router();
const t = require('../controllers/Article.controller');


const multer=require('multer');
    const storage = multer.diskStorage({
        destination:function(req,file,cb){
          cb(null,'uploads/')
        },
        filename:function(req,file,cb){
          cb(null, file.originalname)
        }
      });
    const filefilter=(req, file,cb)=>{
        if(file.mimetype==='image/jpeg' ||file.mimetype==='image/jpg' || file.mimetype==='image/png'){
          cb(null,true)
        }else{
        //reject the file
        cb(new Error(),false)
        }
      }
      const upload=multer({
      storage :storage,
      limits:{fileSize:1024 * 1024 *5},
      fileFilter: filefilter
      })
Router.post('/addArticle' ,upload.single('images'), t.create ) ;
Router.get('/getAllArticles', t.findAllArticles ) ;
Router.get('/getArticle/:id',t.findOne);
Router.delete('/deleteArticle/:id',t.delete);
Router.delete('/deleteAll',t.deleteAll);
Router.put('/UpdateArticle/:id',t.updateArticle);
module.exports=Router;
