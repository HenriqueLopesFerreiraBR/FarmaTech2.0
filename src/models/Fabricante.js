const { Sequelize } = require('sequelize')
const { STRING } = require('sequelize')
const sequelize = require('sequelize')
const connect = require('../../database/connect')



  const Fabricante = connect.define('fabricantes' , {
        id: {
            type:Sequelize.INTEGER,
            autoIncrement: true,
            allowNull:false,
            primaryKey: true
        },
        nome:{
            type: Sequelize.STRING,
            allowNull: false
        },
    })

module.exports = Fabricante;