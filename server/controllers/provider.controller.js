const db = require("../models");
const Provider = db.provider;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

   Provider.create(req.body)
  .then(data => {
    res.send(data);
    console.log("koki succeded ");
    console.log(data)
  })
  .catch(err => {
    console.log(err)
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Provider ."
    });
  });
};
/********************************************* */
exports.findAllProviders = (req, res) => {
  Provider.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Provider."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Provider.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Provider with id=" + id
        });
      });
};
/*******************************************************************/
exports.updateProvider = (req, res) => {
    const id = req.params.id;
    Provider.update(req.body, {
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
        message: "Error updating Provider with id=" + id
      });
    });
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;
    Provider.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Provider was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Provider with id=${id}. Maybe Provider was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Provider with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    Provider.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums}  were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Providers."
          });
        });
};
