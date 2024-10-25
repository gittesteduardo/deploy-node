const { DataTypes, Sequelize } = require('sequelize');
const sequelize = require('../config/database');
const Cliente = require('./Cliente');

const Pedido = sequelize.define('Pedido', {
  pedido_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  data_compra: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: Sequelize.NOW, // Define a data atual como padrão
  },
});

Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id' });

module.exports = Pedido;
