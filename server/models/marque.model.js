module.exports = (sequelize, Sequelize) => {

    const Marque = sequelize.define("marque", {

    name:{
    type: Sequelize.STRING
    },
    description: {
    type: Sequelize.STRING
    },
    });
    
    return Marque;
        };