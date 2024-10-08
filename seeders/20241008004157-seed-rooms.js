'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [
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
      },
      {
        name: 'Room C',
        status: 'under renovation',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
