const { Room } = require("../models");

class RoomsController {
  static async addRoom(req, res) {
    try {
      const { name, price } = req.body;
      const newRoom = await Room.create({ name, price });
      res.status(201).json(newRoom);
    } catch (error) {
      res.status(500).json({ message: "Failed to add room", error });
    }
  }

  static async getAllRooms(req, res) {
    try {
      const rooms = await Room.findAll();
      res.status(200).json(rooms);
    } catch (error) {
      res.status(500).json({ message: "Failed to get rooms", error });
    }
  }

  static async getRoomById(req, res) {
    try {
      const room = await Room.findByPk(req.params.id);
      if (room) {
        res.status(200).json(room);
      } else {
        res.status(404).json({ message: "Room not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to get room", error });
    }
  }
}

module.exports = RoomsController;
