const db = require("../models");
const Article = db.article;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  /*
const fs = require("fs");
const db = require("../models");
const Image = db.images;

const uploadFiles = async (req, res) => {
  try {
    console.log(req.file);
    if (req.file == undefined) {
      return res.send(`You must select a file.`);
    }
    Image.create({
      type: req.file.mimetype,
      name: req.file.originalname,
      data: fs.readFileSync(
        __basedir + "/resources/static/assets/uploads/" + req.file.filename
      ),
    }).then((image) => {
      fs.writeFileSync(
        __basedir + "/resources/static/assets/tmp/" + image.name,
        image.data
      );

      return res.send(`File has been uploaded.`);
    });
  } catch (error) {
    console.log(error);
    return res.send(`Error when trying upload images: ${error}`);
  }
};
*/


console.log(req.file);
   body={
    Name:req.body.Name,
    unity:req.body.unity,
    quantity:req.body.quantity,
    price :req.body.price,
    taxe :req.body.taxe,
    devise:req.body.devise,
    minimum_quantity:req.body.minimum_quantity,
    location:req.body.location,
    providerId:req.body.providerId,
    categorieId:req.body.categorieId,
    image:req.file.path
   }
   console.log(body)
   Article.create(body)
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
exports.findAllArticles = (req, res) => {
  Article.findAll({})
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
    Article.findByPk(id)
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
exports.updateArticle = (req, res) => {
    const id = req.params.id;
    Article.update(req.body, {
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
    Article.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "article was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete article with id=${id}. Maybe article was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete article with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    Article.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums}  were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all abscence."
          });
        });
};
