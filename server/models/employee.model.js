const Abscence= require('./abscence.model');
const {models}=require('sequelize')
module.exports = (sequelize, Sequelize) => {

    const Employee = sequelize.define("employee", {
    
    last_name:{
    type: Sequelize.STRING
    },
    first_name: {
    type: Sequelize.STRING
    },
    date_of_birth: {
    type: Sequelize.DATE
    }, 
    phone_number: {
    type: Sequelize.INTEGER        
    },
    gender: {
    type: Sequelize.STRING
    },
    postal_address:{
    type: Sequelize.STRING
    },
    school_level:{
    type: Sequelize.STRING
    },
    graduation_date:{
    type: Sequelize.DATE
    },
    current_position:{
    type: Sequelize.STRING
    },
    hiring_date:{
    type: Sequelize.DATE
    },
    salary:{
    type: Sequelize.INTEGER
    },
    office:{
    type: Sequelize.STRING
    },
    });
    /*
    Employee.hasMany(Abscence)
    Employee.associate= function(models){
     // Employee.hasMany(models.Abscence,{as: 'abscences', foreignKey: 'userId'})
     Employee.hasMany(models.Abscence, {foreignKey: 'id', targetKey: 'local_customer_id'});

    }
    /*
    Employee.hasMany(this.Abscence, {
      foreignKey: 'commentable_id',
      constraints: false,
      scope: {
        commentable: 'post'
      }
    });
    this.Abscence.belongsTo(this.Employee, {
      foreignKey: 'commentable_id',
      constraints: false,
      as: 'post'
    });
   */
    
    //module.exports=Employee;
    return Employee;
    };