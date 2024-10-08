'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Menambahkan kolom 'status' dengan tipe ENUM
    await queryInterface.addColumn('Rooms', 'status', {
      type: Sequelize.ENUM('tersedia', 'terisi', 'sedang direnovasi'),
      allowNull: false,
      defaultValue: 'tersedia',  // Atur default value jika diperlukan
    });
  },

  down: async (queryInterface, Sequelize) => {
    // Untuk rollback, kita harus menghapus ENUM dan kolomnya
    await queryInterface.removeColumn('Rooms', 'status');
    
    // Jika ingin menghapus tipe ENUM dari database (opsional)
    await queryInterface.sequelize.query('DROP TYPE IF EXISTS "enum_Rooms_status";');
  }
};
