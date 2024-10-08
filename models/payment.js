'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Payment.belongsTo(models.Tenant, { foreignKey: 'tenantId' });  // Relasi ke Tenant
      Payment.belongsTo(models.Room, { foreignKey: 'roomId' });      // Relasi ke Room
    }
  }
  Payment.init({
    amount: DataTypes.FLOAT,
    status: DataTypes.STRING,
    due_date: DataTypes.DATE,
    tenantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Tenants',   // Nama tabel tenant
        key: 'id'
      }
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Rooms',     // Nama tabel room
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};
