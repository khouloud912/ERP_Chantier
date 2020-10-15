module.exports = (sequelize, Sequelize) => {

    const Reception = sequelize.define("reception", {
    montant_total:{
    type: Sequelize.INTEGER
    },    
    reglement_method:{
        type: Sequelize.STRING
    }
    });
    return Reception;
        };