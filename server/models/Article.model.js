module.exports = (sequelize, Sequelize) => {

    const Article = sequelize.define("article", {
    Name:{
    type: Sequelize.STRING
    },
    unity: {
    type: Sequelize.STRING
    },
    quantity:{
    type:Sequelize.INTEGER
    },
    Actual_quantity: {
    type: Sequelize.INTEGER
    }, 
    price: {
    type: Sequelize.INTEGER        
    },
    taxe: {
    type: Sequelize.DOUBLE
    },
    devise:{
    type: Sequelize.STRING
    },
    minimum_quantity :{
    type: Sequelize.STRING
    },
    location:{
    type: Sequelize.STRING
    },
    image: {
    type: Sequelize.STRING
      },
    });
    return Article;
};