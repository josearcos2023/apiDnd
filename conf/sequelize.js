const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('damm', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
