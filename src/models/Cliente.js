const Sequelize = require('sequelize');
const connect = require('../../database/connect');
 
const Cliente = connect.define('cliente', {
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
    cpf: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    },
    funcao: {
        type: Sequelize.STRING
    },
    estado: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    rua: {
        type: Sequelize.STRING
    },

    descricao: Sequelize.STRING
})
 
module.exports = Cliente;