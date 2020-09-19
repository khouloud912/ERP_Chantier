const db = require("../models");
const Commande = db.commande;
const LigneCommande =db.ligne_commande;
const Op = db.Sequelize.Op;
const Articles =db.article

exports.seeDetailsCommandeLigne=(req, res) =>{
if (!req.params.id) {
    return res.status(400).end();
}
let response = {
    "details": []
};
LigneCommande.findAll({
    where: {
        commandeID: req.params.id
    }
}).then(found => {
    if (!found) {
        return res.status(500).end();
    }
    let i = 1;
    found.forEach(element => {
        Articles.findOne({
            where: {
                id: element.articleID
            }
        }).then((article) => {
            if (!article) {
                return res.status(500).end();
            }
            let productDetails = {};
            productDetails.Name = article.Name;
            productDetails.price = article.price;
            productDetails.quantity = article.quantity;
            productDetails.createdAt = article.createdAt;

            response.details.push(productDetails);
            if (i == found.length) {
                return res.status(200).send(response);
            } else {
                i++;
            }
        }).catch((error) => res.status(500).send(error));
    });

}).catch((error) => res.status(500).send(error));
    }




