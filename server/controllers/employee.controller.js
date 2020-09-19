const db = require("../models");
const Employee = db.employee;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  Employee.create(req.body)
    .then(data => {
      res.send(data);
      console.log("koki succeded ");
      console.log(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};
/********************************************* */
exports.findAllEmployee = (req, res) => {
    
  Employee.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving employee."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Employee.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Employee with id=" + id
        });
      });
};
/*******************************************************************/
exports.update = (req, res) => {
  const id = req.params.id;
  Employee.update(req.body, {
    where: { id: id }
  })
    .then(data => {
      res.send({data,
        message: "successfully updated "
      }
        );
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Employee with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;
    Employee.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Employee was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Employee with id=${id}. Maybe Employee was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Employee with id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {

    Employee.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} employee were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all employee."
          });
        });
};

























/*
const mysqlConnection =require('../connection');
const jwt=require("jsonwebtoken");
const  bcrypt  =  require('bcryptjs');
const express= require("express");


const  findUserByEmail  = (email, cb) => {
    return  database.get(`SELECT * FROM employee WHERE email = ?`,[email], (err, row) => {
            cb(err, row)
    });
}

const  createUser  = (user, cb) => {
    return  database.run('INSERT INTO employee (name, email, password) VALUES (?,?,?)',user, (err) => {
        cb(err)
    });
}


exports.getAllEmployee = (req,res)=>{ 
    mysqlConnection.query("SELECT * from employee", (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
}
exports.getOneEmployee = (req,res)=>{ 
    mysqlConnection.query("SELECT * from employee WHERE idemployee =?",[req.params.id], (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
}
exports.deleteEmployee = (req,res)=>{ 
    mysqlConnection.query("DELETE employee WHERE idemployee =?",[req.params.id], (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
}
exports.addEmployee = (req,res)=>{ 
    mysqlConnection.query("INSERT INTO employee SET ?",req.body, (err,rows,fields)=>{
        if(!err){
            res.send("inserted successfully");
        }else{
            console.log(err);
        }
    }) }
    
exports.updateEmployee=(req,res)=>{


    let sql = "UPDATE employee SET last_name='"+req.body.last_name+"', first_name='"+req.body.first_name+"', date_of_birth='"+req.body.date_of_birth+"', phone_number='"+req.body.phone_number+"', gender='"+req.body.gender+"', postal_address='"+req.body.postal_address+"',school_level='"+req.body.first_name+"',graduation_date='"+req.body.graduation_date+"',current_position='"+req.body.current_position+"',hiring_date='"+req.body.hiring_date+"',office='"+req.body.office+"',salary='"+req.body.salary+"',departement_iddepartement='"+req.body.departement_iddepartement+"' WHERE idemployee="+req.params.id;
    let query = mysqlConnection.query(sql, (err, results) => {
        if(!err){
            res.send("updated successfully");
        }else{
            console.log(err);
        }    
    });
    
    let sql = "UPDATE employee SET last_name='"+req.body.last_name+"', first_name='"+req.body.first_name+"', date_of_birth='"+req.body.date_of_birth+"', phone_number='"+req.body.phone_number+"', gender='"+req.body.gender+"', postal_address='"+req.body.postal_address+"',school_level='"+req.body.first_name+"',graduation_date='"+req.body.graduation_date+"',current_position='"+req.body.current_position+"',hiring_date='"+req.body.hiring_date+"',office='"+req.body.office+"',salary='"+req.body.salary+"',departement_iddepartement='"+req.body.departement_iddepartement+"' WHERE idemployee="+req.params.id;
    let query = mysqlConnection.query(sql, (err, results) => {
        if(!err){
            res.send("updated successfully");
        }else{
            console.log(err);
        }    
    });
}

exports.login=(req,res)=>{
    const user={
        id:1,
        username:'john',
        email:'john@gmail.com'
    }
    jwt.sign({user:user},'secretkey',(err,token)=>{
        res.json({token,});
    })
}*/