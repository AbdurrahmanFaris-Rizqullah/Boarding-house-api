const express = require("express");
const TenantsController = require("../controllers/TenantsController");
const RoomsController = require("../Controllers/roomsController");
const PaymentsController = require("../controllers/PaymentsController");
const adminAuth = require("../middlewares/adminAuthorization");
const authentication = require("../middlewares/authenticate");
const router = express.Router();

// Home route
router.get("/", (req, res) => {
  res.send("Boarding House API Home");
});

// Tenants routes
router.post("/add-tenant", authentication, adminAuth, TenantsController.addTenant);
router.get("/tenants", TenantsController.getAllTenants);
router.get("/tenants/:id", TenantsController.getTenantById);

// Rooms routes
router.get("/rooms", RoomsController.getAllRooms);
router.get("/rooms/:id", RoomsController.getRoomById);
router.post("/add-room", authentication, adminAuth, RoomsController.addRoom);

// Payments routes
router.post("/payments", authentication, PaymentsController.addPayment);
router.get("/payments", PaymentsController.getAllPayments);
router.get("/payments/:id", PaymentsController.getPaymentById);

module.exports = router;
