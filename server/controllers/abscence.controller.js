const db = require("../models");
const Abscence = db.abscence;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
  var body={
    type_of_leave:req.body.type_of_leave,
    start_date: req.body.start_date,
    return_date:req.body.return_date,
    leave_remaining:req.body.leave_remaining,
    employeeId:req.body.employeeId
  }
  console.log(body)  
  Abscence.create(body)
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
exports.findAllAbscence = (req, res) => {
  Abscence.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving abscence."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Abscence.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving abscence with id=" + id
        });
      });
};
/*******************************************************************/
exports.updateAbscence = (req, res) => {
    const id = req.params.id;
    Abscence.update(req.body, {
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
        message: "Error updating abscence with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;

    Abscence.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "abscence was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete abscence with id=${id}. Maybe abscence was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete abscence with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    Abscence.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} abscence were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all abscence."
          });
        });
};
