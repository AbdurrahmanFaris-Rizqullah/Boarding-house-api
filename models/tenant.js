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
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { 
          args: true,
          msg: 'Email address already in use!', 
        },
        validate: { 
          isEmail:  {args:true, msg: 'Must be a valid email address',},
          notNull: {  msg: 'Email address is required', },
        },
        
      },
      
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: 'Phone number already in use!',
        },
        validate: {
          isInt: {
            msg: 'Phone number must contain only numbers',
          },
          len: {
            args: [1, 14],
            msg: 'Phone number must be 14 digits long',
          }
        }
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
      modelName: "Tenant",
    }
  );
  return Tenant;
};
