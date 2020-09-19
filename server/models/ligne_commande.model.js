module.exports = (sequelize, Sequelize) => {

    const ligne_commande = sequelize.define("ligne_commande", {
    quantity:{
    type: Sequelize.INTEGER
    }
    });
    return ligne_commande;
};
