const { Payment, Tenant, Room } = require('../models');

class PaymentController {
  
  // Membuat pembayaran baru
  static async createPayment(req, res, next) {
    try {
      const { status, due_date, tenantId, roomId } = req.body;

      const payment = await Payment.create({
        status,
        due_date,
        tenantId,
        roomId
      });

      res.status(201).json(payment);
    } catch (err) {
      next(err); // Mengirim error ke middleware
    }
  }

  // Menampilkan semua pembayaran (dengan filter tenant atau room jika dibutuhkan)
  static async getPayments(req, res, next) {
    try {
      const { tenantId, roomId } = req.query;
      const whereClause = {};

      if (tenantId) whereClause.tenantId = tenantId;
      if (roomId) whereClause.roomId = roomId;

      const payments = await Payment.findAll({
        where: whereClause,
        include: [
          { model: Tenant, attributes: ['name'] },
          { model: Room, attributes: ['name'] }
        ]
      });

      res.status(200).json(payments);
    } catch (err) {
      next(err);
    }
  }

  // Mengupdate status pembayaran (misalnya dari tertunda ke lunas)
  static async updatePayment(req, res, next) {
    try {
      const { id } = req.params;
      const { status } = req.body;

      const payment = await Payment.findByPk(id);
      if (!payment) {
        throw { name: "NotFound" };
      }

      payment.status = status;
      await payment.save();

      res.status(200).json(payment);
    } catch (err) {
      next(err);
    }
  }

  // Menghapus pembayaran (opsional, jika ada kebutuhan untuk ini)
  static async deletePayment(req, res, next) {
    try {
      const { id } = req.params;

      const payment = await Payment.findByPk(id);
      if (!payment) {
        throw { name: "NotFound" };
      }

      await payment.destroy();

      res.status(200).json({ message: 'Payment deleted' });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = PaymentController;
