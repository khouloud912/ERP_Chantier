const db = require("../models");
const Commande = db.commande;
const LigneCommande =db.ligne_commande;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {

  if (!req.body) {
    return res.status(400).send();
}
  Commande.create({
    date_commande: new Date()
}).then((orderCreated) => {
    if (!orderCreated) {
        return res.status(500).send();
    }
    let arrayOfPromises = [];
    let products = [{}];
    products = req.body;
    products.forEach(p => {

      LigneCommande.create({
        quantity: p.quantity,
        articleID: p.id,
        commandeID: orderCreated.id
      }).then(data => {
        console.log(data);
    }).catch(err => {
      console.log(err)
    })
       // arrayOfPromises.push(createCommmandeLigne(p, orderCreated));
    })
  })
    .catch((error) => res.status(500).send(error));

}
/*
let createCommmandeLigne = (product, order) => {
  const body={
    quantity: product.quantity,
    articleID: product.id,
    commandeID: order.id
  }
 console.log(body)
  return new Promise((resolve, reject) => {
      LigneCommande.create(body).then((oLCreated) => {
          if (!oLCreated) {
            console.log("nope")

            return res.status(500).send();
          }
          resolve(oLCreated);
      })
          .catch(() => reject());
  });
}

*/











  /*
  Commande.create(req.body)
  .then(data => {
    res.send(data);
    console.log("koki succeded ");
    console.log(data)
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the commande."
    });
  });*/

/********************************************* */





exports.findAllCommande = (req, res) => {
  Commande.findAll({})
  .then(data => {
    res.send(data);
  })
  .catch(err => {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving Commande."
    });
  });
};
/**************************************************** */
exports.findOne = (req, res) => {
    const id = req.params.id;
    Commande.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Commande  with id=" + id
        });
      });
};
/*******************************************************************/
exports.updateCommande = (req, res) => {
    const id = req.params.id;
    Commande.update(req.body, {
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
        message: "Error updating Commande with id=" + id
      });
    });
  
};
/********************************************************** */
exports.delete = (req, res) => {
    const id = req.params.id;
    Commande.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Commande was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Commande with id=${id}. Maybe Commande was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Commande with id=" + id
        });
      });
};
exports.deleteAll = (req, res) => {
    Commande.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Commande were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Commandes."
          });
        });
};
