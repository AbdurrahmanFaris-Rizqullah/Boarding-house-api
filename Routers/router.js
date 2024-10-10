const express = require("express");
const TenantsController = require("../controllers/TenantsController");
const RoomsController = require("../Controllers/roomsController");
const PaymentsController = require("../Controllers/PaymentController");
const adminAuth = require("../middlewares/adminAuthorization");
const authentication = require("../middlewares/authentication");
const router = express.Router();
const errorHandler = require("../middlewares/errorHandler");

// Home route
router.get('/', TenantsController.getAllTenants);
router.get("/", (req, res) => {
  res.send("Boarding House API Home");
});

// Tenants routes
router.post("/add-tenant", authentication, adminAuth, TenantsController.addTenant);
router.get("/tenants", TenantsController.getAllTenants);
router.get("/tenants/:id", TenantsController.getTenantById);

// Rooms routes
router.get("/rooms", RoomsController.getAllRooms);
router.post("/payments", authentication, PaymentsController.addPayment);
router.get("/payments", PaymentsController.getAllPayments);
router.get("/payments/:id", PaymentsController.getPaymentById);

module.exports = router;
