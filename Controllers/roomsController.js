const { Room } = require('../models');

class RoomController {
  // Menampilkan semua kamar
  static async getAllRooms(req, res, next) {
    try {
      const rooms = await Room.findAll();
      res.status(200).json(rooms);
    } catch (error) {
      next(error); // Forward error ke middleware
    }
  }

  // Menambahkan kamar baru
  static async addRoom(req, res, next) {
    const { name, status, price } = req.body;
    try {
      const newRoom = await Room.create({
        name,
        status,
        price
      });
      res.status(201).json(newRoom);
    } catch (error) {
      next(error); // Forward error ke middleware
    }
  }

  // Mengupdate kamar (termasuk status)
  static async updateRoom(req, res, next) {
    const { id } = req.params;
    const { name, status, price } = req.body;
    try {
      const room = await Room.findByPk(id);
      if (!room) {
        throw { name: 'NotFound' }; // Error custom jika kamar tidak ditemukan
      }

      await room.update({
        name,
        status,
        price
      });

      res.status(200).json(room);
    } catch (error) {
      next(error); // Forward error ke middleware
    }
  }

  // Menghapus kamar
  static async deleteRoom(req, res, next) {
    const { id } = req.params;
    try {
      const room = await Room.findByPk(id);
      if (!room) {
        throw { name: 'NotFound' }; // Error custom jika kamar tidak ditemukan
      }

      await room.destroy();
      res.status(200).json({ message: 'Room deleted successfully' });
    } catch (error) {
      next(error); // Forward error ke middleware
    }
  }
}

module.exports = RoomController;
