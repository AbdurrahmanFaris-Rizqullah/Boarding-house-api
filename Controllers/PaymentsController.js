const { Payment } = require('../models');

class PaymentController {
  static async getAll(req, res) {
    try {
      const payments = await Payment.findAll({
        include: ['Tenant', 'Room'],  // Pastikan sudah set association di model
      });
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: "Error fetching payments" });
    }
  }

  static async create(req, res) {
    try {
      const { amount, status, due_date, tenantId, roomId } = req.body;
      const payment = await Payment.create({ amount, status, due_date, tenantId, roomId });
      res.status(201).json(payment);
    } catch (error) {
      res.status(500).json({ message: "Error creating payment" });
    }
  }

  // Update & Delete payment juga bisa dibuat
}

module.exports = PaymentController;
