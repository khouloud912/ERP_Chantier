const db = require("../models");
const ArticleOutput = db.articleOutput;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  ArticleOutput.create(req.body)
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
exports.findAllArticleOutput = (req, res) => {
  ArticleOutput.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving ArticleOutput."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    ArticleOutput.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving ArticleOutput with id=" + id
        });
      });
};
/*******************************************************************/
exports.updateArticleOutput = (req, res) => {
    const id = req.params.id;
    ArticleOutput.update(req.body, {
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
        message: "Error updating ArticleOutput with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;
    ArticleOutput.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "ArticleOutput was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete articleInput with id=${id}. Maybe articleOutput was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete articleOutput with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    ArticleOutput.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} ArticleOutput were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all articleoutput."
          });
        });
};
