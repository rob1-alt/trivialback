const sequelize = require("./db.js");
const Product = require("../models/Product.js");

sequelize
    .sync({force: true})
    .then((results) => console.log(results))
    .catch(error => {console.log(error); throw(error)})