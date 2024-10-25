const { Sequelize } = require('sequelize');
require('dotenv').config(); 

const sequelize = new Sequelize(process.env.DB_CONNECTION_URL, {
  dialect: 'postgres',
});

module.exports = sequelize;
