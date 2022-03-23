const Sequelize = require("sequelize");
const sequelize = require("../util/bdd");


const Product = sequelize.define("Product", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },

  });
  
  module.exports = Product;