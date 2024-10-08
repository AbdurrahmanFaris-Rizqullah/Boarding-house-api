"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Query untuk mengambil data room dengan harga
    const rooms = await queryInterface.sequelize.query(`SELECT id, price FROM Rooms;`, { type: queryInterface.sequelize.QueryTypes.SELECT });

    // Sesuaikan tenantId dan roomId sesuai dengan data yang tersedia
    return queryInterface.bulkInsert("Payments", [
      {
        amount: rooms.find((room) => room.id === 13).price, // Ambil harga berdasarkan roomId
        status: "paid",
        due_date: new Date("2024-10-31"),
        tenantId: 17,
        roomId: 13,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        amount: rooms.find((room) => room.id === 14).price, // Ambil harga berdasarkan roomId
        status: "pending",
        due_date: new Date("2024-11-15"),
        tenantId: 18,
        roomId: 14,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Payments", null, {});
  },
};
