'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       Client.hasMany(models.Room_Usage, { foreignKey: 'clientId' });
    }
  }
  Client.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    credit: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Client',
    tableName: 'clients',
  });
  return Client;
};