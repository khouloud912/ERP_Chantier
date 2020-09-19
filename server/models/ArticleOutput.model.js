module.exports = (sequelize, Sequelize) => {

    const ArticleOutput = sequelize.define("articleOutput", {
        
    quantity:{
    type: Sequelize.INTEGER
    },
    totally_price: {
    type: Sequelize.INTEGER
    },    
    });
    
    return ArticleOutput;
        };