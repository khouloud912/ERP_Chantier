const db = require("../models");
const Reception = db.reception;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
   Reception.create(req.body)
  .then(data => {
    res.send(data);
    console.log("koki succeded ");
    console.log(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Reception ."
    });
  });
};
/********************************************* */
exports.findAllReception = (req, res) => {
  Reception.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Reception."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Reception.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Reception with id=" + id
        });
      });
};

/*******************************************************************/
exports.updateReception = (req, res) => {
    const id = req.params.id;
    Reception.update(req.body, {
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
        message: "Error updating Reception with id=" + id
      });
    });
};
/***********************************************************/
exports.delete = (req, res) => {
    const id = req.params.id;
    Reception.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Reception was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete reception with id=${id}. Maybe reception was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete reception with id=" + id
        });
      });
};
/**************************************************************** */
exports.deleteAll = (req, res) => {
    Reeption.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums}  were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all receptions."
          });
        });
};
