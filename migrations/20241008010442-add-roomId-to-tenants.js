'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Tenants', 'roomId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Rooms',  // Nama tabel Rooms
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Tenants', 'roomId');
  }
};
