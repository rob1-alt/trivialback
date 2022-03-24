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
    image : {
      type : Sequelize.STRING,
      allowNull: false,
    },
    brand: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    quantity: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    ecoScore: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    deforestation: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    top100: {
      type: Sequelize.STRING,
      allowNull: false,
    }

  });
  
  module.exports = Product;