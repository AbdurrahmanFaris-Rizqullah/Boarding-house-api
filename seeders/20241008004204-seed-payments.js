'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Payments', [
      {
        amount: 1500000,
        status: 'paid',
        due_date: new Date('2024-10-31'),
        tenantId: 1,  // Sesuaikan ID tenant
        roomId: 1,    // Sesuaikan ID room
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        amount: 1800000,
        status: 'pending',
        due_date: new Date('2024-11-15'),
        tenantId: 2,  // Sesuaikan ID tenant
        roomId: 2,    // Sesuaikan ID room
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Payments', null, {});
  }
};
