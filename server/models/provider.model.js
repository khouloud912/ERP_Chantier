module.exports = (sequelize, Sequelize) => {

    const Provider = sequelize.define("provider", {   
         
    Name:{
    type: Sequelize.STRING
    },
    Adress: {
    type: Sequelize.STRING
    },
    postal_code: {
    type: Sequelize.STRING
    }, 
    city: {
    type: Sequelize.STRING     
    },
    country: {
    type: Sequelize.STRING     
    },
    phone: {
    type: Sequelize.INTEGER
    },
    email: {
    type: Sequelize.STRING     
    },
    });
    
    return Provider;
        };