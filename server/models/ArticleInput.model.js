module.exports = (sequelize, Sequelize) => {

    const ArticleInput = sequelize.define("ArticleInput", {   
         
    quantity:{
    type: Sequelize.INTEGER
    },
    total_price: {
    type: Sequelize.INTEGER
    }
    });
    
    return ArticleInput;
        };