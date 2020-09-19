module.exports = (sequelize, Sequelize) => {

    const Categorie = sequelize.define("categorie", {        
    Name_categorie:{
    type: Sequelize.STRING
    },
    description: {
    type: Sequelize.STRING
    },
    });
    return Categorie;
   };