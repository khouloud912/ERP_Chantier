module.exports = (sequelize, Sequelize) => {

    const Departement = sequelize.define("departement", {

    departement_name: {
        type: Sequelize.STRING
     },
    id_sub_departement:{
    type: Sequelize.INTEGER
    },
    description: {
    type: Sequelize.STRING
    }, 
    sub_departement: {
    type: Sequelize.STRING
        
    },
    departement_status: {
    type: Sequelize.STRING
    },
    main_operation:{
    type: Sequelize.STRING
   
    }

    });
    
    return Departement;
        };