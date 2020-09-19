const db = require("../models");
const Marque = db.marque;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

   Marque.create(req.body)
  .then(data => {
    res.send(data);
    console.log("koki succeded ");
    console.log(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the marque."
    });
  });
};
/********************************************* */
exports.findAllMarques = (req, res) => {
  Marque.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Marque."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Marque.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving marque with id=" + id
        });
      });
};
/*******************************************************************/
exports.updateMarque = (req, res) => {
    const id = req.params.id;
    Marque.update(req.body, {
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
        message: "Error updating Marque with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;
    Marque.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Marque was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Marque with id=${id}. Maybe MArque was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Marque with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    Marque.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums}  were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Marque."
          });
        });
};
