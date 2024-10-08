'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tenants', [
      {
        name: 'faris',
        email: 'faris@gmail.com',
        phone: '08123456789',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'adit',
        email: 'adit@gmail.com',
        phone: '08198765432',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tenants', null, {});
  }
};
