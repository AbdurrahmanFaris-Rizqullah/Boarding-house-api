"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Tenant extends Model {
    static associate(models) {
      Tenant.belongsTo(models.Room, { foreignKey: "roomId" });
    }
  }
  Tenant.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.INTEGER,
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
      modelName: "Tenant",
    }
  );
  return Tenant;
};
