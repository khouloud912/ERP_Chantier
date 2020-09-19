const db = require("../models");
const { department } = require("../models");
const Departement = db.department;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  var body={
    departement_name:req.body.departement_name,
    sub_departement: req.body.sub_departement,
    departement_status:req.body.departement_status,
    main_operation:req.body.main_operation,
    description:req.body.description,
  }
console.log(body)
  Departement.create(body)
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
exports.findAllDepartement = (req, res) => {

  Departement.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving department."
    });
  });
  
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Departement.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Department with id=" + id
        });
      });
};
/*******************************************************************/
exports.update = (req, res) => {

    const id = req.params.id;

    Departement.update(req.body, {
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
        message: "Error updating department with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;

    Departement.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "departement was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete department with id=${id}. Maybe department was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete department with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {

    Departement.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} department were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all department."
          });
        });
};
























/*
const mysqlConnection =require('../connection');

exports.getAlldepartement = (req,res)=>{ 
    mysqlConnection.query("SELECT * from departement", (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
}
exports.getOneDepartement = (req,res)=>{ 
    mysqlConnection.query("SELECT * from departement WHERE iddepartement =?",[req.params.id], (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
}
exports.deleteDepartement = (req,res)=>{ 
    mysqlConnection.query(`DELETE FROM departement WHERE iddepartement = ?`,[req.params.id], (err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
        }
    })
}
exports.addDepartement=(req,res)=>{
    mysqlConnection.query("INSERT INTO departement  SET ?",req.body, (err,rows,fields)=>{
        if(!err){
            res.send("inserted successfully");
        }else{
            console.log(err);
        }
    })
}
exports.updateDepartement=(req,res)=>{

        let sql = "UPDATE departement SET id_sub_departement='"+req.body.id_sub_departement+"', departement_name='"+req.body.departement_name+"', description='"+req.body.description+"', sub_departement='"+req.body.sub_departement+"', departement_status='"+req.body.departement_status+"', main_operation='"+req.body.main_operation+"' WHERE iddepartement="+req.params.id;
        let query = mysqlConnection.query(sql, (err, results) => {
            if(!err){
                res.send("updated successfully");
            }else{
                console.log(err);
            }    
        });
}*/