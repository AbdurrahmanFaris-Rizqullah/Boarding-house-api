const { Payment } = require("../models");

class PaymentsController {
  static async addPayment(req, res) {
    try {
      const { amount, tenantId, roomId } = req.body;
      const newPayment = await Payment.create({ amount, tenantId, roomId });
      res.status(201).json(newPayment);
    } catch (error) {
      res.status(500).json({ message: "Failed to add payment", error });
    }
  }

  static async getAllPayments(req, res) {
    try {
      const payments = await Payment.findAll();
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: "Failed to get payments", error });
    }
  }

  static async getPaymentById(req, res) {
    try {
      const payment = await Payment.findByPk(req.params.id);
      if (payment) {
        res.status(200).json(payment);
      } else {
        res.status(404).json({ message: "Payment not found" });
      }
    } catch (error) {
      res.status(500).json({ message: "Failed to get payment", error });
    }
  }
}

module.exports = PaymentsController;
