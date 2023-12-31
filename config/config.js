const {Sequelize}= require('sequelize');

const sequelize = new Sequelize('NodeReact', 'postgres', 'root', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;
