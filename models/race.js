const { DataTypes } = require('sequelize');
const sequelize = require('../conf/sequelize');

const Race = sequelize.define('race', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  life_expectancy: {
    type: DataTypes.INTEGER
  },
  size: {
    type: DataTypes.STRING
  },
  starter_proficiencies: {
    type: DataTypes.BOOLEAN
  },
  image_url: {
    type: DataTypes.STRING
  },
  date_introduction: {
    type: DataTypes.DATE
  },
  speed: {
    type: DataTypes.INTEGER
  },
  description: {
    type: DataTypes.TEXT
  }
});

module.exports = Race;
