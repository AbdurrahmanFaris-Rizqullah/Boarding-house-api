const { Room, Payment } = require("../models");

const authorization = async (req, res, next) => {
  try {
    // Misalkan kita mengecek apakah Tenant bisa mengakses Room tertentu
    let room = await Room.findByPk(req.params.id); 
    if (!room) {
      throw { name: "NotFound" };
    }

    // Admin bisa mengakses semua resource
    if (req.tenant.role === "admin") {
      next();
    } 
    // Jika tenant adalah penyewa kamar tersebut, izinkan akses
    else if (room.tenantId === req.tenant.id) {
      next();
    } else {
      throw { name: "Forbidden" };
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = authorization;
