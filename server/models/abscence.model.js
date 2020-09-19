const Employee= require('./employee.model')
module.exports = (sequelize, Sequelize) => {

    const Abscence = sequelize.define("abscence", {
    type_of_leave: {
    type: Sequelize.STRING
    },
    start_date: {
    type: Sequelize.DATE
    }, 
    return_date: {
    type: Sequelize.DATE
    },
    leave_remaining: {
    type: Sequelize.INTEGER
    },
    });
    /*
    Abscence.associate=function(models){
     //Abscence.belongsToMany(models.Employee, {as:'employees',foreignKey: 'userId'});
     Abscence.belongsTo(models.Employee, {foreignKey: 'local_customer_id', targetKey: 'id'});

    }
*/
    //module.exports=Abscence;
    return Abscence;
        };

    