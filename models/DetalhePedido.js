const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./Pedido');
const Produto = require('./Produto');

const DetalhePedido = sequelize.define('DetalhePedido', {
  dt_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  dt_valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  dt_desconto: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

DetalhePedido.belongsTo(Pedido, { foreignKey: 'dt_pedido_id' });
DetalhePedido.belongsTo(Produto, { foreignKey: 'dt_produto_id' });

module.exports = DetalhePedido;
