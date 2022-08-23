const Sequelize = require('sequelize');
const connect = require('../../database/connect');
const Fabricante = require('./Fabricante');

const Produto = connect.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    preco: {
        type: Sequelize.DOUBLE
    },
    descricao: Sequelize.STRING
})

Produto.belongsTo(Fabricante,{
    constraint: true,
    foreignKey: 'idFabricante'
})
 
module.exports = Produto;