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
      Room.hasMany(models.Tenant, {
        foreignKey: 'roomId', // Foreign key di Tenant
        onDelete: 'CASCADE',  // Hapus tenant jika room dihapus
        onUpdate: 'CASCADE'   // Update foreign key jika room di-update
      });
      
      Room.hasMany(models.Payment, {
        foreignKey: 'roomId', // Foreign key di Payment
        onDelete: 'CASCADE',  // Hapus payment jika room dihapus
        onUpdate: 'CASCADE'   // Update foreign key jika room di-update
      });
    }
  }
  Room.init({
    name: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};
