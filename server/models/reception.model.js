module.exports = (sequelize, Sequelize) => {

    const Reception = sequelize.define("reception", {   
         
    delivered_quantity:{
    type: Sequelize.INTEGER
    },    
    });
    return Reception;
        };