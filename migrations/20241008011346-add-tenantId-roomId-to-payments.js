'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Payments', 'tenantId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Tenants',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });

    await queryInterface.addColumn('Payments', 'roomId', {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Rooms',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Payments', 'tenantId');
    await queryInterface.removeColumn('Payments', 'roomId');
  }
};
