const { DataTypes } = require('sequelize');
const sequelize = require('../conf/sequelize');

const Class = sequelize.define('class', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT
  }
});

module.exports = Class;
