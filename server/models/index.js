const Sequelize = require("sequelize");
const sequelize = new Sequelize('gprojet', 'root', '', {
  host: 'localhost',
  operatorsAliases: 0,
  dialect:'mysql'
});
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.employee = require("./employee.model")(sequelize, Sequelize);
db.department = require("./department.model")(sequelize, Sequelize);
db.abscence = require("./abscence.model")(sequelize, Sequelize);
db.article = require("./Article.model")(sequelize, Sequelize);
db.articleInput = require("./ArticleInput.model")(sequelize, Sequelize);
db.articleOutput = require("./ArticleOutput.model")(sequelize, Sequelize);
db.categorie = require("./categorie.model")(sequelize, Sequelize);
db.provider = require("./provider.model")(sequelize, Sequelize);
db.commande = require("./commande.model")(sequelize, Sequelize);
db.reception = require("./reception.model")(sequelize, Sequelize);
db.ligne_commande = require("./ligne_commande.model")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);


db.employee.hasMany(db.abscence, { as: "abscences" });
db.abscence.belongsTo(db.employee, {
  foreignKey: "employeeId",
  as: "employees",
});
db.department.hasMany(db.employee, { as: "employees" });
db.employee.belongsTo(db.department, {
  foreignKey: "departementId",
  as: "departements",
});

db.article.hasMany(db.articleInput, { as: "articleInputs" });
db.articleInput.belongsTo(db.article, {
  foreignKey: "articleId",
  as: "articles",
});
db.article.hasMany(db.articleOutput, { as: "articleOutputs" });
db.articleOutput.belongsTo(db.article, {
  foreignKey: "articleId",
  as: "articles",
});
db.categorie.hasMany(db.article, { as: "articles" });
db.article.belongsTo(db.categorie, {
  foreignKey: "categorieId",
  as: "categories",
});
db.provider.hasMany(db.article, { as: "articles" });
db.article.belongsTo(db.provider, {
  foreignKey: "providerId",
  as: "providers",
});

db.commande.hasMany(db.reception ,{as: "receptions" })
db.reception.belongsTo(db.commande, {
  foreignKey: "commandeId",
  as: "commandes",
});


db.provider.hasMany(db.commande, {as: "commandes" });
db.commande.belongsTo(db.provider, {
  foreignKey: "providerId",
  as: "providers",
});

db.article.belongsToMany(db.commande, {
  through: "ligne_commande",
  as: "commandes",
  foreignKey: "articleID",
});
db.commande.belongsToMany(db.article, {
  through: "ligne_commande",
  as: "articles",
  foreignKey: "commandeID",
});

db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",
  otherKey: "userId"
});
db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",
  otherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;