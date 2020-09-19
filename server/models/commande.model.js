module.exports = (sequelize, Sequelize) => {

    const Commande = sequelize.define("commande", {
        
    date_commande:{
    type: Sequelize.DATE
    },
    });
    
    return Commande;
        };