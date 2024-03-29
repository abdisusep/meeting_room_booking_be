'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasMany(models.Room_Usage, { foreignKey: 'roomId' });
    }
  }
  Room.init({
    roomName: DataTypes.STRING,
    costPerHour: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Room',
    tableName: 'rooms',
  });
  return Room;
};