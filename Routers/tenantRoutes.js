const express = require("express");
const router = express.Router();
const TenantController = require("../controllers/TenantsController");

// Routes untuk tenant
router.get("/tenants", TenantController.getAll); // Mendapatkan semua tenant
router.post("/tenants", TenantController.create); // Menambahkan tenant baru
router.put("/tenants/:id", TenantController.update); // Update tenant berdasarkan id
router.delete("/tenants/:id", TenantController.delete); // Hapus tenant berdasarkan id

module.exports = router;
