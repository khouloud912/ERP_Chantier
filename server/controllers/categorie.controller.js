const db = require("../models");
const Categorie = db.categorie;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  Categorie.create(req.body)
  .then(data => {
    res.send(data);
    console.log("koki succeded ");
    console.log(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Categorie."
    });
  });
};
/********************************************* */
exports.findAllCategories = (req, res) => {
  Categorie.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Categories."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Categorie.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Categorie with id=" + id
        });
      });
};
/*******************************************************************/
exports.updateCategorie = (req, res) => {
    const id = req.params.id;
    Categorie.update(req.body, {
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
        message: "Error updating Categorie with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;
    Categorie.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Categorie was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete categorie with id=${id}. Maybe categorie was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete categorie with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    Categorie.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} categorie were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all categorie."
          });
        });
};
