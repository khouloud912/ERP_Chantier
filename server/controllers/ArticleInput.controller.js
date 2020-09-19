const db = require("../models");
const ArticleInput = db.articleInput;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  ArticleInput.create(req.body)
  .then(data => {
    res.send(data);
    console.log("koki succeded ");
    console.log(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the ArticleInput."
    });
  });
};
/********************************************* */
exports.findAllArticleInputs = (req, res) => {
  ArticleInput.findAll({})
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
    ArticleInput.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ArticleInput with id=" + id
        });
      });
};
/*******************************************************************/
exports.updateArticleInput = (req, res) => {
    const id = req.params.id;
    ArticleInput.update(req.body, {
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
        message: "Error updating ArticleInput with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;
    ArticleInput.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "articleInput was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete articleInput with id=${id}. Maybe articleInput was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete articleInput with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    ArticleInput.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} ArticleInput were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all articleINput."
          });
        });
};
