'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     */
    static associate(models) {
      Tenant.hasMany(models.Payment, {
        foreignKey: 'tenantId', // Foreign key di Payment
        onDelete: 'CASCADE',    // Hapus semua pembayaran jika tenant dihapus
        onUpdate: 'CASCADE'     // Update foreign key jika tenant di-update
      });

      Tenant.belongsTo(models.Room, {
        foreignKey: 'roomId',  // Foreign key di Tenant
        onDelete: 'SET NULL',  // Set null jika room dihapus, tenant tetap ada
        onUpdate: 'CASCADE'    // Update foreign key jika room di-update
      });
    }
  }
  Tenant.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Tenant',
  });
  return Tenant;
};
