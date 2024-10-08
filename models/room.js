'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
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
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("tersedia", "terisi", "sedang direnovasi"),
      allowNull: false,
      defaultValue: "tersedia"
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: "0"
    }
  }, {
    sequelize,
    modelName: 'Room',
  });
  return Room;
};


