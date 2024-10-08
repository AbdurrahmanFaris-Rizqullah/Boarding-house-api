const { Room } = require('../models');

class RoomController {
  static async getAll(req, res) {
    try {
      const rooms = await Room.findAll();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Error fetching rooms" });
    }
  }

  static async create(req, res) {
    try {
      const { name, status, price } = req.body;
      const room = await Room.create({ name, status, price });
      res.status(201).json(room);
    } catch (error) {
      res.status(500).json({ message: "Error creating room" });
    }
  }

  // Update status kamar, Delete kamar, dll.
}

module.exports = RoomController;
