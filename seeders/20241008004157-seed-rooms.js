'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [
      {
        name: 'Room A',
        status: 'available',
        price: 1500000,  // Harga untuk Room A
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Room B',
        status: 'occupied',
        price: 1800000,  // Harga untuk Room B
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Room C',
        status: 'under renovation',
        price: 2000000,  // Harga untuk Room C
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Rooms', null, {});
  }
};
