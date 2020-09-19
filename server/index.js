const express= require("express");
const bodyParser=require("body-parser");
const jwt=require("jsonwebtoken");
const  bcrypt  =  require('bcryptjs'); 
const sequelize=require('sequelize');
const fileUpload = require('express-fileupload');
const mysqlConnection =require('./connection');
const EmployeeRoutes=require('./routes/employee.route');
const DepartementRoutes=require('./routes/departement.route');
const AbscenceRoutes=require('./routes/abscence.route');
const ReceptionRoutes=require('./routes/reception.route');
const ProviderRoutes=require('./routes/provider.route');
const MarqueRoutes=require('./routes/marque.route');
const commandeRoutes=require('./routes/commande.route');
const categorieRoutes=require('./routes/categorie.route');
const ArticleOutputRoutes=require('./routes/ArticleOutput.route');
const ArticleInputRoutes=require('./routes/ArticleInput.route');
const ArticleRoutes=require('./routes/Article.route');
const CommandeLigneRoutes=require('./routes/ligne_commande.route');


var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); // to enable calls from every domain 
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE'); // allowed actiosn
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization'); 
  app.use('/uploads',express.static('uploads'))
  

  if (req.method === 'OPTIONS') {
    return res.sendStatus(200); // to deal with chrome sending an extra options request
  }
  next(); // call next middlewer in line
});
const db = require("./models");
//db.sequelize.sync({force:true});
app.use("/Employee", EmployeeRoutes);
app.use("/Departement", DepartementRoutes);
app.use("/Abscence",AbscenceRoutes);
app.use("/Article",ArticleRoutes);
app.use("/ArticleInput",ArticleInputRoutes);
app.use("/ArticleOutput",ArticleOutputRoutes);
app.use("/categorie",categorieRoutes);
app.use("/commande",commandeRoutes);
app.use("/marque",MarqueRoutes);
app.use("/Provider",ProviderRoutes);
app.use("/Reception",ReceptionRoutes);
app.use("/CommandeLigne",CommandeLigneRoutes);

app.listen(3001);

