const { DataTypes } = require('sequelize');
const sequelize = require('../conf/sequelize');
const Class = require('./class');
const Race = require('./race');

const Character = sequelize.define('character', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  birthday: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

Character.belongsTo(Class);
Character.belongsTo(Race);

module.exports = Character;
