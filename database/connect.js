require('dotenv').config();
const Sequelize = require('sequelize');

const db = process.env.DB_NAME;
const user = process.env.DB_USER;
const host = process.env.DB_HOST;
const password = process.env.DB_PWD;



const sequelize = new Sequelize(db, user, password, {dialect: 'mysql', host: 'localhost'});



module.exports = sequelize;