'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rooms', [
      {
        name: 'Room A',
        status: 'available',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Room B',
        status: 'occupied',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  }
};
