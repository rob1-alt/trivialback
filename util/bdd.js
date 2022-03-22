const Sequelize = require("sequelize");

require('dotenv').config()

const sequelize = new Sequelize(process.env.MARIADB_DATABASE, process.env.MARIADB_USER, process.env.MARIADB_PASSWORD ,{
    dialect:"mysql",
    host:process.env.MARIADB_HOST
})



module.exports = sequelize