'use strict';
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Tenant, { foreignKey: "tenantId" });
      Payment.belongsTo(models.Room, { foreignKey: "roomId" });
    }
  }
  Payment.init(
    {
      status: DataTypes.STRING,
      due_date: DataTypes.DATE,
      tenantId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Tenants",
          key: "id",
        },
      },
      roomId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Rooms",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Payment",
    }
  );
  return Payment;
};
