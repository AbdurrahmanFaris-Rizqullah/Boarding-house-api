const express = require('express');
const RoomController = require('../Controllers/roomsController.js');
const router = express.Router();

// Menampilkan semua kamar
router.get('/rooms', RoomController.getAllRooms);

// Menambahkan kamar baru
router.post('/rooms', RoomController.addRoom);

// Mengupdate kamar berdasarkan id
router.put('/rooms/:id', RoomController.updateRoom);

// Menghapus kamar berdasarkan id
router.delete('/rooms/:id', RoomController.deleteRoom);

module.exports = router;
