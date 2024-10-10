const express = require('express');
const router = express.Router();
const PaymentController = require('../Controllers/PaymentController');

router.post('/payments', PaymentController.createPayment);
router.get('/payments', PaymentController.getPayments);
router.put('/payment/:id', PaymentController.updatePayment);
router.delete('/payment/:id', PaymentController.deletePayment);

module.exports = router;
