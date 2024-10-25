const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Produto = sequelize.define('Produto', {
  produto_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  produto_nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Produto;
